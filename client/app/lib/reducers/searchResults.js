import { ADD_SEARCH_RESULTS } from '../constants/actionTypes'

export default function searchResults(state = [], action) {
  switch(action.type) {
  case ADD_SEARCH_RESULTS:
    return state.concat(action.resultIds)
  default:
    return state
  }
}
