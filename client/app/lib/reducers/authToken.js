import { SET_AUTH_TOKEN } from '../constants/actionTypes'

export default function authToken(state = null, action) {
  switch(action.type) {
  case SET_AUTH_TOKEN:
    return action.token
  default:
    return state
  }
}
