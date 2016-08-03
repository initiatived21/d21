import { connect } from 'react-redux'
import merge from 'lodash/merge'
import PledgeSidebar from '../components/PledgeSidebar'

const mapStateToProps = (state, ownProps) => {
  const currentPledge = state.pledges[ownProps.pledge_id]
  const currentUser = state.currentUser

  let userIsInitiator
  if (currentUser && currentPledge) {
    userIsInitiator = state.currentUser.id == currentPledge.user_id
  } else {
    userIsInitiator = false
  }

  return {
    isPreview: ['initialized', 'requested'].includes(currentPledge.aasm_state),
    isDraft: (currentPledge.aasm_state == 'initialized'),
    userConfirmed: (currentUser && currentUser.confirmed),
    activateAction: `/${I18n.locale}/pledges/${currentPledge.id}/finalize`,
    userIsInitiator,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeSidebar)
