import { gql } from '@apollo/client'

export const query = gql`
  mutation CreateCookbook($name: String) {
    insert_books_one(object: { name: $name }) {
      __typename
      id
      name
      is_public
      description
    }
  }
`
