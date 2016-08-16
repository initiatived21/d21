import { connect } from 'react-redux'
import { values, merge } from 'lodash'
import PledgeList from '../components/PledgeList'

function filterPledges(pledges, filter) {
  const pledgeList = values(pledges)

  if (typeof filter === 'undefined') {
    return pledgeList
  }

  return pledgeList.filter( (pledge) => {
    return (pledge.aasm_state === filter)
  })
}

function deNormalizePledges(state) {
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

export function mapStateToProps(state, ownProps) {
  return ({
    pledges: filterPledges(deNormalizePledges(state), ownProps.filter)
  })
}

export function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList)
