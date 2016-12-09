import { ASK_QUESTION } from '../constants/actionTypes'

export default function askedQuestions(state = [], action) {
  switch(action.type) {
  case ASK_QUESTION:
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
