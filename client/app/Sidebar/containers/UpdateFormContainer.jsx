import { connect } from 'react-redux'
import I18n from 'i18n-js'
import { addFlashMessageAction } from '../../Flash/actions/flashActions'
import { setEntity } from '../../lib/actions/entityActions'
import UpdateForm from '../components/UpdateForm'

const mapStateToProps = (state) => {
  return {
    isSubmitting: state.forms.isSubmitting.NewUpdateFormObject,
    wasSubmitted: state.ui.updateSubmitted,
  }
}

const mapDispatchToProps = dispatch => ({
  afterResponse: json => {
    if (json.status === 'success') {
      dispatch(addFlashMessageAction('success', I18n.t('UpdateForm.sent_message')))
      dispatch(setEntity('updateSubmitted', true, 'ui'))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateForm)
