import _ from 'lodash'

import generalReducer, { generalInitialState } from './general'
import signPledgeFormReducer, { initialSPFRState }
  from '../../PledgeView/reducers/signPledgeFormReducer'

export const initialState = _.merge(
  generalInitialState,
  initialSPFRState
)
export default function combinedReducer(state = initialState, action) {
  const reducers = [ generalReducer, signPledgeFormReducer ]

  let newState = state
  for (let reducer of reducers) {
    newState = reducer(newState, action)
  }
  return newState
}
