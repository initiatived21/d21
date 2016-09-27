import { connect } from 'react-redux'
import I18n from 'i18n-js'
import SignPledgeForm from '../components/SignPledgeForm'
import { addFlashMessage } from '../../Flash/actions/flashActions'
import { signPledge } from '../actions/sidebarActions'

const mapStateToProps = (state, ownProps) => ({
  isSubmitting: state.rform.isSubmitting.NewSignatureFormObject || false,
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

    afterResponse: function(response) {
      if (response.status === 'success') {
        dispatch(addFlashMessage('success', I18n.t('SignPledgeForm.signed_message')))
        dispatch(signPledge(id))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SignPledgeForm)
