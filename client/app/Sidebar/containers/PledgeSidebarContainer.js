import { connect } from 'react-redux'
import I18n from 'i18n-js'
import PledgeSidebar from '../components/PledgeSidebar'
import localPath from '../../lib/browser/localPath'

const mapStateToProps = (state, ownProps) => {
  const currentPledge = state.entities.pledges[ownProps.pledge_id]
  const currentUserId = state.currentUser

  let userIsInitiator
  if (currentUserId !== null && currentPledge) {
    userIsInitiator = currentUserId === currentPledge.user_id
  } else {
    userIsInitiator = false
  }

  const renderReportForm = !userIsInitiator

  const currentUser = state.entities.users[currentUserId]

  return {
    isPreview: ['initialized', 'requested'].includes(currentPledge.aasm_state),
    isDraft: currentPledge.aasm_state === 'initialized',
    showSignForm: currentPledge.aasm_state === 'active',
    userConfirmed: !!(currentUser && currentUser.confirmed),
    activateAction: localPath(`/pledges/${currentPledge.id}/finalize`),
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
