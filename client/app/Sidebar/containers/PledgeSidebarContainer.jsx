import { connect } from 'react-redux'
import I18n from 'i18n-js'
import PledgeSidebar from '../components/PledgeSidebar'

const mapStateToProps = (state, ownProps) => {
  const currentPledge = state.pledges[ownProps.pledge_id]
  const currentUser = state.currentUser

  let userIsInitiator
  if (currentUser && currentPledge) {
    userIsInitiator = currentUser.id == currentPledge.user_id
  } else {
    userIsInitiator = false
  }

  const renderReportForm = !userIsInitiator

  return {
    isPreview: ['initialized', 'requested'].includes(currentPledge.aasm_state),
    isDraft: (currentPledge.aasm_state == 'initialized'),
    userConfirmed: !!(currentUser && currentUser.confirmed),
    activateAction: `/${I18n.locale}/pledges/${currentPledge.id}/finalize`,
    userIsInitiator,
    renderReportForm
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeSidebar)
