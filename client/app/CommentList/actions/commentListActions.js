import { ASK_QUESTION } from '../../lib/constants/actionTypes'

export function askQuestion(pledgeId) {
  return {
    type: ASK_QUESTION,
    pledgeId,
  }
}
