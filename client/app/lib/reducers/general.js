import merge from 'lodash/merge'
import assign from 'lodash/assign'

export const generalInitialState = {
  pledges: {},
  tags: {},
  ui: {
    searchResultsLoading: false,
    sessionPopupVisible: false
  }
}

export default function generalReducer(state = generalInitialState, action) {
  let newState = merge({}, state)

  switch (action.type) {
  case 'ADD_ENTITIES':
    return merge(newState, action.entities)

  case 'SET_ENTITY':
    const entityBasePath =
      (action.entityType) ? newState[action.entityType] : newState
    entityBasePath[action.entityId] = action.entity
    return newState

  case 'SET_SEARCH_RESULTS_LOADING_STATE':
    return merge(newState, { ui: { searchResultsLoading: action.state } })

  case 'TOGGLE_SESSION_POPUP':
    return merge(newState, { ui: { sessionPopupVisible: !state.ui.sessionPopupVisible }})

  case 'HIDE_SESSION_POPUP':
    return merge(newState, { ui: { sessionPopupVisible: false }})

  default:
    return newState
  }
}
