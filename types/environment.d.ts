declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH0_AUDIENCE: string
      REACT_APP_AUTH0_CLIENT_ID
      REACT_APP_AUTH0_DOMAIN: string
      REACT_APP_GRAPHQL_URI: string
      REACT_APP_LOG_GRAPHQL_QUERIES: string
    }
  }
}

export {}
