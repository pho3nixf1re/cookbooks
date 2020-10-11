import { useAuth0 } from '@auth0/auth0-react'
import { Avatar } from '@material-ui/core'
import React from 'react'
import { LoginButton } from '../LoginButton'
import { LogoutButton } from '../LogoutButton'

export const Authentication = () => {
  const { user, isAuthenticated } = useAuth0()
  const initials = user.given_name?.[0] + user.family_name?.[0] || ''

  return (
    <div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Avatar alt={user?.name} variant="circle" src={user?.picture}>
        {initials}
      </Avatar>
    </div>
  )
}
