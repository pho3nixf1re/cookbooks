import { useMutation } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import { v4 as guid } from 'uuid'
import { Data as CookbooksQueryData } from '../../../../screens/Cookbooks/helpers/use-my-cookbooks-query'
import { query as CookbooksQuery } from '../../../../screens/Cookbooks/helpers/use-my-cookbooks-query/query'
import { query } from './mutation'

type CreateCookbookOptions = {
  name: string
}

export function useCreateCookbookMutation() {
  const { user } = useAuth0()
  const [mutation, { loading }] = useMutation(query)

  const userId = user.sub

  const createCookbook = ({ name }: CreateCookbookOptions) =>
    mutation({
      variables: { name },
      optimisticResponse: {
        __typename: 'books',
        id: guid(),
        description: null,
        is_public: false,
        name: name,
        user_id: userId,
      },
      refetchQueries: [{ query: CookbooksQuery, variables: { userId } }],
      update: (proxy, { data: { insert_books_one: book } }) => {
        const books = [book]

        try {
          const data = proxy.readQuery<CookbooksQueryData>({
            query: CookbooksQuery,
            variables: { userId },
          })
          const existingBooks = data?.books || []

          const updatedBooks = books
            .concat(...existingBooks)
            .sort(({ name }, { name: nextName }) => {
              if (name > nextName) return 1
              if (name < nextName) return -1
              return 0
            })

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

  return { createCookbook, loading }
}
