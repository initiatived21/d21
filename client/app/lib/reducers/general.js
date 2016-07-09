import merge from 'lodash/merge'
import assign from 'lodash/assign'

export const initialState = {
  pledges: {},
  tags: [],
}

export default function generalReducer(state = initialState, action) {
  let newState = assign({}, state)

  switch (action.type) {
    case 'ADD_ENTITIES':
      return merge(newState, action.entities)

    case 'SET_ENTITY':
      const entityBasePath =
        (action.entityType) ? newState[action.entityType] : newState
      entityBasePath[action.entityId] = action.entity
      return newState

    case 'UPDATE_FORM_ATTRIBUTE':
      const formBasePath = newState[action.formObjectName]
      if (action.submodel) {
        if (!formBasePath[action.submodel]) {
          formBasePath[action.submodel] = {}
        }
        formBasePath[action.submodel][action.attribute] = action.value
      } else {
        formBasePath[action.attribute] = action.value
      }
      return newState

    default:
      return newState
  }
}