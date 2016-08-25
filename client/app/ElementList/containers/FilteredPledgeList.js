import { connect } from 'react-redux'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PledgeList from '../components/PledgeList'

export function mapStateToProps(state, ownProps) {
  return ({
    pledges: filterPledges(deNormalizePledges(state), ownProps.filter)
  })
}

function filterPledges(pledges, filter) {
  if (typeof filter === 'undefined') {
    return pledges
  }

  return pledges.filter( (pledge) => {
    return (pledge.aasm_state === filter)
  })
}

export function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList)
