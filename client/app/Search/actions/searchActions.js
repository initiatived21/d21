import { ADD_SEARCH_RESULTS, SET_SEARCH_LOADING_STATE }
  from '../../lib/constants/actionTypes'

export function addSearchResults(resultIds) {
  return {
    type: ADD_SEARCH_RESULTS,
    resultIds
  }
}

export function setSearchLoadingState(state) {
  return {
    type: SET_SEARCH_LOADING_STATE,
    state
  }
}
