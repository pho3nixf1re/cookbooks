import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'
import React from 'react'

export const LogoutButton = () => {
  const { logout } = useAuth0()
  const handleClick = () => logout({ returnTo: window.location.origin })

  return (
    <Button onClick={handleClick} color="primary" variant="contained">
      Log out
    </Button>
  )
}
