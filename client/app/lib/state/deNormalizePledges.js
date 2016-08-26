/**
 * Denormalize pledges.
 * Does not mutate state (important!)
 *
 */

import { values, merge } from 'lodash'

export default function deNormalizePledges(state) {
  const pledges = values(merge({}, state.pledges))

  for (let pledge of pledges) {
    pledge.initiator = state.users[pledge.initiator]
    if (pledge.tags) { // TODO: Why is this `if` needed?
      pledge.tags =
        values(state.tags).filter(tag => pledge.tags.includes(tag.id))
    }
  }

  return pledges
}
