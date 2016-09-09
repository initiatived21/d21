import { SET_SEARCH_LOADING_STATE } from '../constants/actionTypes'

export default function searchLoadingState(state = false, action) {
  switch(action.type) {
  case SET_SEARCH_LOADING_STATE:
    return action.state
  default:
    return state
  }
}
