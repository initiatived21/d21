import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import updateAction from '../actions/updateAction'
import InputComponent from '../components/InputComponent'

const mapStateToProps = function(state, ownProps) {
  const formId = ownProps.formId
  const attrs = ownProps.object.attributes

  // get saved & server provided errors, concat them together
  let errors = null
  // if (ownProps.errors) {
  if (state[formId] && state[formId].errors) {
    errors = state[formId].errors[ownProps.attribute] || []
  }
  errors = compact(concat(errors, ownProps.serverErrors))

  let value = null
  if (ownProps.submodel && attrs[ownProps.submodel]) {
    value = attrs[ownProps.submodel][ownProps.attribute] || ''
  } else {
    value = attrs[ownProps.attribute] || ''
  }

  return {
    errors,
    value,
    formId
  }
}

const mapDispatchToProps = dispatch =>
  ({
    onChange(formId, attribute, submodel, value) {
      return dispatch(updateAction(formId, attribute, submodel, value))
    }
  })

  // Frontend validations, unfinished:
  // onBlur: (attribute, formObject) ->
  //   errors = formObject.validate(attribute)
  //   return unless errors
  //   dispatch updateAction 'NewPledgeForm', 'errors', errors

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent)
connected.isInput = true

export default connected
