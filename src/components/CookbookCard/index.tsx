import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'
import { VisibilityOff } from '@material-ui/icons'
import React from 'react'
import { useStyles } from './styles'

type Props = {
  book: Book
}

export function CookbookCard({ book }: Props) {
  const classes = useStyles()
  const { name, description } = book

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          size="small"
          color="secondary"
          onClick={handleRemove}
          aria-label="delete"
        >
          <Delete />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          aria-label={book.is_public ? 'set private' : 'set public'}
        >
          {book.is_public ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </CardActions>
    </Card>
  )
}
