import { BatchHttpLink } from '@apollo/client/link/batch-http'

export const httpLink = new BatchHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI,
})
