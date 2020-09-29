import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

export const withAuthProvider = () => <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
) =>
  function Auth0ProviderEnhancer(props: P): JSX.Element {
    return (
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
        redirectUri={window.location.origin}
      >
        <Component {...props} />
      </Auth0Provider>
    )
  }
