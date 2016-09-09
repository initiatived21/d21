import { TOGGLE_SESSION_POPUP, HIDE_SESSION_POPUP } from '../constants/actionTypes'

export default function sessionPopup(state = false, action) {
  switch(action.type) {
  case TOGGLE_SESSION_POPUP:
    return !state
  case HIDE_SESSION_POPUP:
    return false
  default:
    return state
  }
}
