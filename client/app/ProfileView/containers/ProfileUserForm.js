import { connect } from 'react-redux'
import I18n from 'i18n-js'
import ProfileUserForm from '../components/ProfileUserForm'
import { addFlashMessage } from '../../Flash/actions/flashActions'
import { setEntity } from '../../lib/actions/entityActions'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  afterResponse: function(response) {
    if (response.status === 'success') {
      // Update user data in state
      const user = response.changes.current_user
      dispatch(setEntity(user.id, user, 'users'))

      dispatch(addFlashMessage('success', I18n.t('ProfileUserForm.form_sent')))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUserForm)
