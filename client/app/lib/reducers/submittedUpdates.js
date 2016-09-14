import { SUBMIT_UPDATE } from '../constants/actionTypes'

export default function submittedUpdates(state = [], action) {
  switch(action.type) {
  case SUBMIT_UPDATE:
    if (!state.includes(action.pledgeId)) {
      return state.concat(action.pledgeId)
    }
    else {
      return state
    }
  default:
    return state
  }
}
