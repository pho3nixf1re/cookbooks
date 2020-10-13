import { useQuery, gql } from '@apollo/client'

const query = gql`
  query ScreenTitle {
    screenTitle @client
  }
`

type ScreenTitleData = {
  screenTitle: string
}

export function useScreenTitleQuery() {
  const { data, loading } = useQuery<ScreenTitleData>(query)
  return { screenTitle: data?.screenTitle, loading }
}
