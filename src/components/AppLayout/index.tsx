import { Container } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import { useRequireAuthentication } from '../../hooks/use-require-authentication'
import { AppHeader } from '../AppHeader'
import { useStyles } from './styles'

export function AppLayout() {
  const { authorized } = useRequireAuthentication()
  const classes = useStyles()

  if (!authorized) return <Fragment />

  return (
    <div className={classes.container}>
      <AppHeader />
      <Container component="main" className={classes.content}>
        <Outlet />
      </Container>
    </div>
  )
}
