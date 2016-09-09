import { connect } from 'react-redux'
import I18n from 'i18n-js'
import SignPledgeForm from '../components/SignPledgeForm'
import { addFlashMessageAction } from '../../Flash/actions/flashActions'
import signPledgeAction from '../actions/signPledgeAction'

const mapStateToProps = (state, ownProps) => ({
  isSubmitting: state.forms.isSubmitting.NewSignatureFormObject || false,
  isAlreadySigned: state.signedPledges.includes(ownProps.id)
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { id } = ownProps
  const { dispatch } = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    onResponse: function(response) {
      if (response.status === 'success') {
        dispatch(addFlashMessageAction('success', I18n.t('SignPledgeForm.signed_message')))
        dispatch(signPledgeAction(id))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SignPledgeForm)
