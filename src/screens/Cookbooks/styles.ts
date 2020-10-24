import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(325px, 1fr));',
    gridTemplateRows: 'repeat(auto-fill, max-content)',
    gridGap: theme.spacing(3),
  },
}))
