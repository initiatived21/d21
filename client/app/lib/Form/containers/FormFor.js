import { connect } from 'react-redux'
import merge from 'lodash/merge'

import { setEntity } from '../../actions/entityActions'
import submitAjaxForm from '../actions/submitAjaxForm'
import BaseForm from '../components/BaseForm'

const mapStateToProps = (state, ownProps) => {
  const formId = ownProps.id || ownProps.object.name
  const editedStateObject = state[formId]

  return {
    existingAttrs: assembleAttrsFromServer(
      ownProps.formData.object, ownProps.object
    ),
    formObject: new ownProps.object(editedStateObject),
    editedStateObject,
    formId,
    commit: (editedStateObject && editedStateObject.commit),
  }
}

// the values we want from the server provided serialized object are nested
// under `fields`. The same is true for included submodels.
function assembleAttrsFromServer(serializedReformObject, jayformObject) {
  // Early return when there was no serialized object provided by the server
  if (!serializedReformObject) { return {} }

  // Otherwise assemble main and submodels' fields
  let attrs = merge({}, serializedReformObject.fields)
  for (let submodel of jayformObject.submodels) {
    if (serializedReformObject.fields[submodel]) {
      attrs[submodel] = serializedReformObject.fields[submodel].fields
    }
  }
  return attrs
}

const mapDispatchToProps = (dispatch) => ({
  onBlur() {
    // TODO: validationAction not yet defined
    // return dispatch(validationAction(field))
  },

  // TODO: This should not be needed
  ensureStateObjectExistence(formId, existingStateInstance, existingAttrs) {
    if (existingStateInstance) { return }
    return dispatch(setEntity(
      formId, existingAttrs
    ))
  },

  dispatch,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,

  onSubmit(event) {
    if (!ownProps.ajax) { return true }
    event.preventDefault()

    const { dispatch } = dispatchProps
    const { formObject } = stateProps
    const data = formObject.toFormData(event.nativeEvent.target)

    dispatch(submitAjaxForm(ownProps.formData.action, data, formObject))

    return false
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BaseForm)
