import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { LoginButton } from '../LoginButton'
import { LogoutButton } from '../LogoutButton'
import { Profile } from '../Profile'
import styles from './App.module.scss'

export function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className={styles.container}>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  )
}
