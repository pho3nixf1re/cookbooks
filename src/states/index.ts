import { mergeAll } from 'ramda'
import { policy as screenTitlePolicy } from './screen-title'

export const typePolicies = mergeAll([screenTitlePolicy])
