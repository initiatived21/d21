import * as types from '../constants/actionTypes'
import merge from 'lodash/merge'
import assign from 'lodash/assign'

export const generalInitialState = {
  pledges: {},
  tags: {},
  searchResults: [],
  pledgesSigned: [],
  flashMessages: {},
  ui: {
    searchResultsLoading: false,
    sessionPopupVisible: false,
  }
}

export default function generalReducer(state = generalInitialState, action) {
  let newState = merge({}, state)
  let id

  switch (action.type) {
  case 'ADD_ENTITIES':
    return merge(newState, action.entities)

  case 'SET_ENTITY':
    const entityBasePath =
      (action.entityType) ? newState[action.entityType] : newState
    entityBasePath[action.entityId] = action.entity
    return newState

  case 'SIGN_PLEDGE':
    if (!newState.pledgesSigned.includes(action.id)) {
      newState.pledgesSigned.push(action.id)
    }
    return newState

  case types.ADD_FLASH_MESSAGE:
    id = Date.now().toString()
    newState.flashMessages[id] = {
      id,
      type: action.flashType,
      text: action.text
    }
    return newState

  case types.REMOVE_FLASH_MESSAGE:
    delete newState.flashMessages[action.id]
    return newState

  case types.SET_SEARCH_LOADING_STATE:
    return merge(newState, { ui: { searchResultsLoading: action.state } })

  case types.ADD_SEARCH_RESULTS:
    newState.searchResults = newState.searchResults.concat(action.resultIds)
    return newState

  case 'TOGGLE_SESSION_POPUP':
    return merge(newState, { ui: { sessionPopupVisible: !state.ui.sessionPopupVisible }})

  case 'HIDE_SESSION_POPUP':
    return merge(newState, { ui: { sessionPopupVisible: false }})

  default:
    return newState
  }
}
