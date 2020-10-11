import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Authentication } from '../Authentication'
import { Cookbooks } from '../Cookbooks'

export function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <Authentication />
      {isAuthenticated && <Cookbooks />}
    </div>
  )
}
