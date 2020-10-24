import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3)
  },
  button: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.grey[200]
  }
}))
