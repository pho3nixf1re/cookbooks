import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import React, {
  Fragment,
  MutableRefObject,
  ComponentType,
  useEffect,
  useRef,
} from 'react'
import getApolloClient from '../lib/graphql'

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
