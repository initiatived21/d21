import { ADD_ENTITIES, SET_ENTITY } from '../constants/actionTypes'
import merge from 'lodash/merge'

const initialState = {
  pledges: {},
  tags: {},
  users: {}
}

export default function generalReducer(state = initialState, action) {
  let newState

  switch (action.type) {
  case ADD_ENTITIES:
    return merge({}, state, action.entities)

  case SET_ENTITY:
    newState = merge({}, state)
    if (action.entityType) {
      newState[action.entityType][action.entityId] = action.entity
    }
    else {
      newState[action.entityId] = action.entity
    }
    return newState

  default:
    return state
  }
}
