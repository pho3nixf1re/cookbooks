import { useAuth0 } from '@auth0/auth0-react'
import { Container } from '@material-ui/core'
import React from 'react'
import { AppHeader } from '../AppHeader'
import { CookbookCard } from '../CookbookCard'
import { ScreenLoading } from '../ScreenLoading'
import { useMyCookbooksQuery } from './helpers'
import { useStyles } from './styles'

export function Cookbooks() {
  const { user } = useAuth0()
  const classes = useStyles()

  const { books, loading } = useMyCookbooksQuery({ userId: user.sub })

  return (
    <>
      <AppHeader title="My cookbooks" />
      <Container component="main" className={classes.container}>
        <ScreenLoading open={loading} />
        <div className={classes.cards}>
          {books?.map(book => (
            <CookbookCard key={book.id} book={book} />
          ))}
        </div>
      </Container>
    </>
  )
}
