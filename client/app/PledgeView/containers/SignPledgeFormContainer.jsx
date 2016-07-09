import { connect } from 'react-redux'
// import merge from 'lodash/merge'

// import { setEntity } from '../../lib/actions/entityActions'
// import submitSignPledgeForm from '../actions/submitSignPledgeForm'
import SignPledgeForm from '../components/SignPledgeForm'

const mapStateToProps = (state, ownProps) => ({
  // existingAttrs: merge({}, ownProps.formData.object),
  isSubmitting: state.isSubmitting.NewSignatureFormObject || false,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // ensureStateObjectExistence(formObject, existingStateInstance, existingAttrs) {
  //   if (existingStateInstance) { return }
  //   return dispatch(setEntity(
  //     formObject.constructor.name, existingAttrs
  //   ))
  // },
  //
  // onSubmit(event) {
  //   event.preventDefault()
  //   const data = ownProps.object.toFormData()
  //   dispatch(submitSignPledgeForm(ownProps.formData.action, data))
  //   return false
  // },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignPledgeForm)
