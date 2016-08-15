import merge from 'lodash/merge'
import assign from 'lodash/assign'

export const generalInitialState = {
  pledges: {},
  tags: [],
  ui: {
    searchResultsLoading: false,
    sessionPopupVisible: false
  }
}

export default function generalReducer(state = generalInitialState, action) {
  let newState = assign({}, state)

  switch (action.type) {
  case 'ADD_ENTITIES': {
    return merge(newState, action.entities)
  }

  case 'SET_ENTITY': {
    const entityBasePath =
      (action.entityType) ? newState[action.entityType] : newState
    entityBasePath[action.entityId] = action.entity
    return newState
  }

  case 'UPDATE_FORM_ATTRIBUTE': {
    const formBasePath = newState[action.formId]
    if (action.submodel) {
      if (!formBasePath[action.submodel]) {
        formBasePath[action.submodel] = {}
      }
      formBasePath[action.submodel][action.attribute] = action.value
    } else {
      formBasePath[action.attribute] = action.value
    }
    return newState
  }

  case 'SET_SEARCH_RESULTS_LOADING_STATE': {
    return merge(newState, { ui: { searchResultsLoading: action.state } })
  }

  case 'TOGGLE_SESSION_POPUP': {
    return merge(newState, { ui: { sessionPopupVisible: !state.ui.sessionPopupVisible }})
  }

  case 'HIDE_SESSION_POPUP': {
    return merge(newState, { ui: { sessionPopupVisible: false }})
  }

  default: {
    return newState
  }
  }
}
