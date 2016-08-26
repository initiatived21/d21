import { connect } from 'react-redux'
import I18n        from 'i18n-js'
import StateFooter from '../components/StateFooter'

const mapStateToProps = (state, ownProps) => {
  const pledge = ownProps.pledge
  const aasm_state = pledge.aasm_state

  let showEditButton, showDeleteButton

  switch(aasm_state) {
  case 'initialized':
    showEditButton = true
    showDeleteButton = true
    break
  case 'requested':
    showDeleteButton = true
    break
  case 'active':
    showDeleteButton = true
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
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateFooter)
