import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 345px)',
    gridTemplateRows: 'repeat(auto-fill, max-content)',
    gridGap: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}))
