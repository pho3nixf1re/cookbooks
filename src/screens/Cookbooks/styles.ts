import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 345px)',
    gridTemplateRows: 'repeat(auto-fill, max-content)',
    gridGap: theme.spacing(3),
  },
}))
