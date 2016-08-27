import { connect } from 'react-redux'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PledgeList from '../components/PledgeList'

export function mapStateToProps(state, ownProps) {
  return ({
    pledges: sortPledges(filterPledges(deNormalizePledges(state), ownProps.filter))
  })
}

function sortPledges(pledges) {
  return pledges.sort(function(a, b) {
    return Date.parse(b.created_at) - Date.parse(a.created_at)
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
