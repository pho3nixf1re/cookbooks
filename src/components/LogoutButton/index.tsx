import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LogoutButton = () => {
  const { logout } = useAuth0()
  const handleClick = () => logout({ returnTo: window.location.origin })

  return <button onClick={handleClick}>Log out</button>
}
