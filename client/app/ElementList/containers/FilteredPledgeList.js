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
  const pledges = merge({}, state.pledges)

  for (let key in pledges) {
    pledges[key].initiator = state.users[pledges[key].initiator]
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
