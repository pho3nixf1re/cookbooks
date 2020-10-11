import React, { ComponentType } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouterProvider = () => <P extends Record<string, unknown>>(
  Component: ComponentType<P>
) =>
  function RouterProviderEnhancer(props: P): JSX.Element {
    return (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    )
  }
