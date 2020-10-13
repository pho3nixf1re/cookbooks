import { setContext } from '@apollo/client/link/context'

export const authLink = (
  getAccessTokenSilently: (options: { audience: string }) => Promise<string>
) =>
  setContext(async function authenticationLink(_, context) {
    const token = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
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
