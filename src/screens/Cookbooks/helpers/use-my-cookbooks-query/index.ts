import { useQuery } from '@apollo/client'
import { query } from './query'

type Options = {
  userId: string
}

export type Data = {
  books: Book[]
}

type Variables = {
  userId: string
}

export function useMyCookbooksQuery({ userId }: Options) {
  const { data, loading } = useQuery<Data, Variables>(query, {
    variables: { userId },
  })
  const books = data?.books

  return { books, loading }
}
