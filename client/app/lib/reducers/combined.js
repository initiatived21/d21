import merge from 'lodash/merge'

import generalReducer, { generalInitialState } from './general'
import ajaxSubmissionReducer, { initialAjaxSubmissionState }
  from '../Form/reducers/ajaxSubmissionReducer'

export const initialState = merge(
  generalInitialState,
  initialAjaxSubmissionState
)
export default function combinedReducer(state = initialState, action) {
  const reducers = [ generalReducer, ajaxSubmissionReducer ]

  let newState = state
  for (let reducer of reducers) {
    newState = reducer(newState, action)
  }
  return newState
}
