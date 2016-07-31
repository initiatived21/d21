import merge from 'lodash/merge'

import generalReducer, { generalInitialState } from './general'
import ajaxSubmissionReducer, { initialAjaxSubmissionState }
  from '../Form/reducers/ajaxSubmissionReducer'
import imageInputReducer, { initialImageInputState } from '../Form/reducers/imageInputReducer'

export const initialState = merge(
  generalInitialState,
  initialAjaxSubmissionState,
  initialImageInputState
)

export default function combinedReducer(state = initialState, action) {
  const reducers = [ generalReducer, ajaxSubmissionReducer, imageInputReducer ]

  let newState = state
  for (let reducer of reducers) {
    newState = reducer(newState, action)
  }
  return newState
}
