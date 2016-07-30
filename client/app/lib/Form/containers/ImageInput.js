import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import updateAction from '../actions/updateAction'
import ImageInputComponent from '../components/ImageInputComponent'

const mapStateToProps = function(state, ownProps) {
  const formObjectName = ownProps.object.constructor.name
  const attrs = ownProps.object.attributes

  let errors = null

  if (state[formObjectName] && state[formObjectName].errors) {
    errors = state[formObjectName].errors[ownProps.attribute] || []
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
    formObjectName
  }
}

const mapDispatchToProps = dispatch =>
  ({
    onChange(formObjectName, attribute, submodel, value) {
      return dispatch(updateAction(formObjectName, attribute, submodel, value))
    }
  })

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageInputComponent)
connected.isInput = true

export default connected
