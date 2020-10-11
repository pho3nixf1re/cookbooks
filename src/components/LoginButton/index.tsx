import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'
import React from 'react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  const handleClick = () => loginWithRedirect()

  return (
    <Button onClick={handleClick} color="primary" variant="contained">
      Log in
    </Button>
  )
}
