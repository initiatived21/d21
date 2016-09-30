import { connect } from 'react-redux'
import I18n from 'i18n-js'
import { addFlashMessage } from '../../Flash/actions/flashActions'
import { submitUpdate } from '../actions/sidebarActions'
import { addEntities } from '../../lib/actions/entityActions'
import UpdateForm from '../components/UpdateForm'

const mapStateToProps = (state, ownProps) => {
  return {
    isSubmitting: state.rform.isSubmitting.NewUpdateFormObject === true,
    wasSubmitted: state.submittedUpdates.includes(ownProps.id),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleResponse: (_formId, data) => dispatch(addEntities(data)),
  dispatch,
})

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { id } = ownProps
  const { dispatch } = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    afterResponse: function(response) {
      if (response.status === 'success') {
        dispatch(addFlashMessage('success', I18n.t('UpdateForm.sent_message')))
        dispatch(submitUpdate(id))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(UpdateForm)
