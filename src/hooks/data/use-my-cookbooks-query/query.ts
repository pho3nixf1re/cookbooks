import { gql } from '@apollo/client'

export const query = gql`
  query MyBooks($userId: String) {
    books(where: { user_id: { _eq: $userId } }, order_by: { name: asc }) {
      id
      name
      description
      is_public
    }
  }
`
