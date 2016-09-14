import { SIGN_PLEDGE, SUBMIT_UPDATE } from '../../lib/constants/actionTypes'

export function signPledge(id) {
  return {
    type: SIGN_PLEDGE,
    id
  }
}

export function submitUpdate(pledgeId) {
  return {
    type: SUBMIT_UPDATE,
    pledgeId
  }
}
