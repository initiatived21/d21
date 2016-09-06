import * as types from '../constants/actionTypes'
import merge from 'lodash/merge'
import assign from 'lodash/assign'

export const generalInitialState = {
  pledges: {},
  tags: {},
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
      text: action.text,
      removed: false
    }
    return newState

  case types.REMOVE_FLASH_MESSAGE:
    newState.flashMessages[action.id].removed = true
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
