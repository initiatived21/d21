import { connect } from 'react-redux'
import I18n        from 'i18n-js'
import StateFooter from '../components/StateFooter'

const mapStateToProps = (state, ownProps) => {
  const pledge = ownProps.pledge
  const aasm_state = pledge.aasm_state

  let showEditButton, showDeleteButton, deleteConfirmationMessage

  switch(aasm_state) {
  case 'initialized':
    showEditButton = true
    showDeleteButton = true
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
    deleteConfirmationMessage
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateFooter)
