import { useMutation } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import { Data as CookbooksQueryData } from '../use-my-cookbooks-query'
import { query as CookbooksQuery } from '../use-my-cookbooks-query/query'
import { query } from './mutation'

type Options = {
  bookId: number
}

export function useRemoveCookbookMutation({ bookId }: Options) {
  const { user } = useAuth0()
  const userId = user.sub
  const [mutation, { loading }] = useMutation(query, { variables: { bookId } })

  const removeCookbook = () =>
    mutation({
      variables: { bookId },
      update(proxy) {
        try {
          const data = proxy.readQuery<CookbooksQueryData>({
            query: CookbooksQuery,
            variables: { userId },
          })
          const books = data?.books || []

          const updatedBooks = books.filter(({ id }) => id != bookId)

          proxy.writeQuery({
            query: CookbooksQuery,
            variables: { userId },
            data: {
              books: updatedBooks,
            },
          })
        } catch (error) {
          console.info('Failed to update cookbook list cache.', error)
        }
      },
    })

  return { removeCookbook, loading }
}
