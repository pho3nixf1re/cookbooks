import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { AddCard } from '../../components/AddCard'
import { AddCookbookDialog } from '../../components/AddCookbookDialog'
import { CookbookCard } from '../../components/CookbookCard'
import { ScreenLoading } from '../../components/ScreenLoading'
import { useMyCookbooksQuery } from '../../hooks/data/use-my-cookbooks-query'
import { useScreenTitle } from '../../states/screen-title'
import { useStyles } from './styles'

export function Cookbooks() {
  const { user } = useAuth0()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = (): void => setOpen(false)

  const handleOpen = (): void => setOpen(true)

  useScreenTitle('Cookbooks')

  const { books, loading } = useMyCookbooksQuery({ userId: user.sub })

  return (
    <>
      <ScreenLoading open={loading} />
      <div className={classes.cards}>
        <AddCard onClick={handleOpen} />
        <AddCookbookDialog open={open} onClose={handleClose} />
        {books?.map(book => (
          <CookbookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}
