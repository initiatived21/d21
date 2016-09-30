import { connect } from 'react-redux'
import { take } from 'lodash'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PledgeList from '../components/PledgeList'

export function mapStateToProps(state, ownProps) {
  return ({
    pledges: limitPledges(sortPledges(filterPledges(deNormalizePledges(state.entities),
      ownProps.filter)), ownProps.maxPledges)
  })
}

function limitPledges(pledges, limit) {
  if (limit) {
    return take(pledges, limit)
  } else {
    return pledges
  }
}

function sortPledges(pledges) {
  return pledges.sort(function(a, b) {
    return Date.parse(b.created_at) - Date.parse(a.created_at)
  })
}

function filterPledges(pledges, filter) {
  switch (filter) {
  case 'active':
  case 'successful':
    return pledges.filter(pledge => (pledge.aasm_state === filter))

  case 'recommended':
    return pledges.filter(pledge => pledge.recommended)

  default:
    return pledges
  }
}

export function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList)
