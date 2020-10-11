import { Typography, Link } from '@material-ui/core'
import React from 'react'

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://pho3nixf1re.net/">
      Matthew Turney
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
)
