import { connect } from 'react-redux'
import I18n        from 'i18n-js'
import StateFooter from '../components/StateFooter'

const mapStateToProps = (state, ownProps) => {
  const pledge = ownProps.pledge
  const aasm_state = pledge.aasm_state

  const currentUserId = state.currentUser
  const currentUser = state.entities.users[currentUserId]
  const userConfirmed = !!(currentUser && currentUser.confirmed)

  let showEditButton, showDeleteButton, showRequestButton, deleteConfirmationMessage

  switch(aasm_state) {
  case 'initialized':
    showEditButton = true
    showDeleteButton = true
    showRequestButton = userConfirmed ? true : false
    deleteConfirmationMessage = I18n.t('StateFooter.delete_confirmation')
    break
  case 'requested':
    showDeleteButton = true
    deleteConfirmationMessage = I18n.t('StateFooter.delete_confirmation')
    break
  case 'active':
    showDeleteButton = true
    deleteConfirmationMessage = I18n.t('StateFooter.delete_confirmation_active')
    break
  case 'successful':
  case 'failed':
  case 'disapproved':
  default:
  }

  return {
    pledgeId: pledge.id,
    showEditButton,
    showDeleteButton,
    showRequestButton,
    deleteConfirmationMessage,
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateFooter)
