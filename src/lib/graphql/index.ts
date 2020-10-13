import { ApolloClient, from } from '@apollo/client'
import apolloLogger from 'apollo-link-logger'
import { cache } from './cache'
import { authLink, httpLink } from './links'

export default function getApolloClient(
  getAccessTokenSilently: (options: { audience: string }) => Promise<string>
) {
  const links = [authLink(getAccessTokenSilently), httpLink]
  process.env.REACT_APP_LOG_GRAPHQL_QUERIES == 'true' &&
    links.unshift(apolloLogger)

  return new ApolloClient({
    link: from(links),
    cache,
  })
}
