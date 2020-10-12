import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { screenTitle } from '../../states/screen-title'
import { CookbookCard } from '../CookbookCard'
import { ScreenLoading } from '../ScreenLoading'
import { useMyCookbooksQuery } from './helpers'
import { useStyles } from './styles'

export function Cookbooks() {
  const { user } = useAuth0()
  const classes = useStyles()
  screenTitle.set(() => 'My cookbooks')

  const { books, loading } = useMyCookbooksQuery({ userId: user.sub })

  return (
    <>
      <ScreenLoading open={loading} />
      <div className={classes.cards}>
        {books?.map(book => (
          <CookbookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}
