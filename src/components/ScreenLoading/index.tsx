import { Backdrop, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

type Props = {
  open: boolean
}

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export const ScreenLoading = ({ open }: Props) => {
  const classes = useStyles()

  return (
    <Backdrop open={open} className={classes.backdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
