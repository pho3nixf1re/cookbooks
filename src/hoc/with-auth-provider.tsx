import { Auth0Provider } from '@auth0/auth0-react'
import React, { ComponentType } from 'react'

export const withAuthProvider = () => <P extends Record<string, unknown>>(
  Component: ComponentType<P>
) =>
  function Auth0ProviderEnhancer(props: P): JSX.Element {
    return (
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Component {...props} />
      </Auth0Provider>
    )
  }
