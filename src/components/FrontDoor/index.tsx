import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box, Button, Container, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import React from 'react'
import { Navigate } from 'react-router'
import { Copyright } from '../Copyright'
import { useStyles } from './styles'

export function FrontDoor() {
  const { isAuthenticated, loginWithRedirect: login } = useAuth0()
  const classes = useStyles()

  if (isAuthenticated) return <Navigate to="/cookbooks" replace={true} />

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Avatar className={classes.icon}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5" className={classes.title}>
        Welcome!
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Please sign in to begin.
      </Typography>
      <Button
        fullWidth={true}
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={login}
      >
        Sign in
      </Button>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
