import { TOGGLE_SESSION_POPUP, HIDE_SESSION_POPUP, SET_CURRENT_USER, SET_AUTH_TOKEN }
  from '../../lib/constants/actionTypes'

export function toggleSessionPopup() {
  return {
    type: TOGGLE_SESSION_POPUP
  }
}

export function hideSessionPopup() {
  return {
    type: HIDE_SESSION_POPUP
  }
}

export function setCurrentUser(id) {
  return {
    type: SET_CURRENT_USER,
    id
  }
}

export function setAuthToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token
  }
}
