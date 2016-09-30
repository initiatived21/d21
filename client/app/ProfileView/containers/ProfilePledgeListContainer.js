import { connect } from 'react-redux'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PledgeList from '../../ElementList/components/PledgeList'

const mapStateToProps = (state) => {
  const currentUserId = state.currentUser || {}

  return {
    pledges: filterUserPledges(deNormalizePledges(state.entities), currentUserId),
    showControls: true
  }
}

function filterUserPledges(pledges, userId) {
  return pledges.filter( (pledge) => {
    return (pledge.user_id === userId)
  })
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList)
