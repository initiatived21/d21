import merge from 'lodash/merge'

import generalReducer, { generalInitialState } from './general'
// import { reducer, initialState as initialFormState }
//   from 'react-jayform'
import { reducer as formReducer, initialState as initialFormState }
  from 'rform'
import imageInputReducer, { initialImageInputState }
  from '../../Inputs/reducers/imageInputReducer'

export const initialState = merge(
  generalInitialState,
  initialFormState,
  initialImageInputState
)

export default function combinedReducer(state = initialState, action) {
  const reducers = [ generalReducer, formReducer, imageInputReducer ]

  let newState = state
  for (let reducer of reducers) {
    newState = reducer(newState, action)
  }
  return newState
}
