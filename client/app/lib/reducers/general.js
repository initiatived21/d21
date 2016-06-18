import _ from 'lodash'

export const initialState = {
  pledges: {},
  tags: [],
}

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTITIES':
      return _.merge({}, state, action.entities)

    case 'SET_ENTITY':
      let newState = Object.assign({}, state)
      const entityBasePath =
        (action.entityType) ? newState[action.entityType] : newState
      entityBasePath[action.entityId] = action.entity
      return newState

    case 'UPDATE_FORM_ATTRIBUTE':
      newState = Object.assign({}, state)
      const formBasePath = newState[action.id]
      if (action.submodel) {
        formBasePath[action.submodel][action.attribute] = action.value
      } else {
        formBasePath[action.attribute] = action.value
      }
      return newState

    default:
      return state
  }
}
