import { InMemoryCache } from '@apollo/client'
import { typePolicies } from '../../states'

export const cache = new InMemoryCache({ typePolicies })
