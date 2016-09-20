/**
 * Denormalize pledges.
 * Does not mutate state (important!)
 *
 */

import values from 'lodash/values'
import merge from 'lodash/merge'
import includes from 'lodash/includes'

export default function deNormalizePledges(state) {
  const pledges = values(merge({}, state.pledges))

  for (let pledge of pledges) {
    pledge.initiator = state.users[pledge.initiator]
    if (pledge.tags) { // TODO: Why is this `if` needed?
      pledge.tags =
        values(state.tags).filter(tag => includes(pledge.tags, tag.id))
    }
  }

  return pledges
}
