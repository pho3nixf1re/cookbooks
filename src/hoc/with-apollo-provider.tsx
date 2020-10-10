import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'
import apolloLogger from 'apollo-link-logger'
import React, {
  Fragment,
  MutableRefObject,
  ComponentType,
  useEffect,
  useRef,
} from 'react'

export const withApolloProvider = () => <P extends Record<string, unknown>>(
  Component: ComponentType<P>
) =>
  function ApolloProviderEnhancer(props: P) {
    const { getAccessTokenSilently } = useAuth0()

    const client: MutableRefObject<
      ApolloClient<NormalizedCacheObject> | undefined
    > = useRef()

    useEffect(() => {
      client.current = getApolloClient(getAccessTokenSilently)
    }, [getAccessTokenSilently])

    if (!client.current) return <Fragment />

    return (
      <ApolloProvider
        client={client.current as ApolloClient<NormalizedCacheObject>}
      >
        <Component {...props} />
      </ApolloProvider>
    )
  }

export default function getApolloClient(
  getAccessTokenSilently: (options: { audience: string }) => Promise<string>
) {
  const httpLink = new BatchHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  })

  const authLink = setContext(async function authenticationLink(_, context) {
    const token = await getAccessTokenSilently({
      audience: 'https://cookbooks.feliciterra.com',
    })

    if (!token) return context

    const newContext = {
      headers: {
        ...context.headers,
        Authorization: `Bearer ${token}`,
      },
    }

    return newContext
  })

  const links = [authLink, httpLink]
  process.env.REACT_APP_LOG_GRAPHQL_QUERIES == 'true' &&
    links.unshift(apolloLogger)

  return new ApolloClient({
    link: from(links),
    cache: new InMemoryCache(),
  })
}
