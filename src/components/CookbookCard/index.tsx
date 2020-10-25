import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'
import { DeleteAction } from './DeleteAction'

type Props = {
  book: Book
}

export function CookbookCard({ book }: Props) {
  const { id, name, description } = book

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
        <DeleteAction bookId={id} />
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
