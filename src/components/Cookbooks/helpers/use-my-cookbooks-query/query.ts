import { gql } from '@apollo/client'

export const query = gql`
  query MyBooks($userId: String) {
    books(where: { user_id: { _eq: $userId } }) {
      id
      name
      description
    }
  }
`
