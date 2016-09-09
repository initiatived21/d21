import { connect } from 'react-redux'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PledgeList from '../../ElementList/components/PledgeList'

const mapStateToProps = (state) => {
  const user = state.currentUser || {}

  return {
    pledges: filterUserPledges(deNormalizePledges(state.entities), user),
    showControls: true
  }
}

function filterUserPledges(pledges, user) {
  return pledges.filter( (pledge) => {
    return (pledge.user_id === user.id)
  })
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList)
