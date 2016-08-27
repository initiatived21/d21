import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import { updateAction } from 'rform'
import NumberInputComponent from '../components/NumberInputComponent'

const mapStateToProps = function(state, ownProps) {
  const formId = ownProps.formId
  const attrs = ownProps.formObject.attributes

  // get saved & server provided errors, concat them together
  let errors = null
  if (state[formId] && state[formId].errors) {
    errors = state[formId].errors[ownProps.attribute] || []
  }
  errors = compact(concat(errors, ownProps.serverErrors))

  let value = null
  const { defaultValue } = ownProps

  if (ownProps.submodel && attrs[ownProps.submodel]) {
    value = attrs[ownProps.submodel][ownProps.attribute]
    if (value === null) {
      value = defaultValue
    }
  } else {
    value = attrs[ownProps.attribute]
    if (value === null) {
      value = defaultValue
    }
  }

  return {
    errors,
    value,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  const { min, max } = ownProps

  return {
    onChange: function(formId, attribute, submodel, value) {
      dispatch(updateAction(formId, attribute, submodel, value))
    },
    onDecrease: function(formId, attribute, submodel, value) {
      let newValue = parseInt(value)
      if (newValue > min) {
        newValue--
      }
      dispatch(updateAction(formId, attribute, submodel, newValue))
    },
    onIncrease: function(formId, attribute, submodel, value) {
      let newValue = parseInt(value)
      if (newValue < max) {
        newValue++
      }
      dispatch(updateAction(formId, attribute, submodel, newValue))
    },
    onBlur: function(formId, attribute, submodel, value) {
      let newValue = parseInt(value)
      if (newValue > max) {
        newValue = max
      }
      if (newValue < min) {
        newValue = min
      }
      dispatch(updateAction(formId, attribute, submodel, newValue))
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInputComponent)
connected.isInput = true

export default connected
