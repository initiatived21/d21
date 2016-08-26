import { connect } from 'react-redux'
import SignPledgeForm from '../components/SignPledgeForm'
import signPledgeAction from '../actions/signPledgeAction'

const mapStateToProps = (state, ownProps) => ({
  isSubmitting: state.isSubmitting.NewSignatureFormObject || false,
  isAlreadySigned: state.pledgesSigned.includes(ownProps.id)
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
