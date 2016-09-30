import { connect } from 'react-redux'
import { updateAction, getName } from 'rform'
import SelectInputComponent from '../components/SelectInputComponent'

const mapStateToProps = function(state, ownProps) {

  const attrs = state.rform[ownProps.formId]
  let value = ''
  if (attrs && ownProps.submodel && attrs[ownProps.submodel]) {
    value = attrs[ownProps.submodel][ownProps.attribute] || ''
  } else if (attrs) {
    value = attrs[ownProps.attribute] || ''
  }

  const name = getName(ownProps.model, ownProps.submodel, ownProps.attribute)

  return {
    value,
    name,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,

  onChange(changes) {
    const changesToSave =
      changes ? changes.map(change => change.value) : null

    dispatchProps.dispatch(
      updateAction(
        ownProps.formId, ownProps.attribute, ownProps.submodel, changesToSave
      )
    )
  },
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(SelectInputComponent)

export default connected
