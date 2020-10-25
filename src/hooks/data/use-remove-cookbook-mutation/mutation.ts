import { gql } from '@apollo/client'

export const query = gql`
  mutation RemoveCookbook($bookId: Int!) {
    delete_books_by_pk(id: $bookId) {
      id
    }
  }
`
