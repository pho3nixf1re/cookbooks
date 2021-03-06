import CssBaseline from '@material-ui/core/CssBaseline'
import { compose } from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import { withApolloProvider } from './hoc/with-apollo-provider'
import { withAuthProvider } from './hoc/with-auth-provider'
import { withRouterProvider } from './hoc/with-router-provider'
import * as serviceWorker from './serviceWorker'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RootApp = compose<any, any, any, any>(
  withRouterProvider(),
  withAuthProvider(),
  withApolloProvider()
)(App) as typeof App

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <RootApp />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
