import { SIGN_PLEDGE } from '../constants/actionTypes'

export default function signedPledges(state = [], action) {
  switch(action.type) {
  case SIGN_PLEDGE:
    if (!state.includes(action.id)) {
      return state.concat(action.id)
    }
    else {
      return state
    }
  default:
    return state
  }
}
