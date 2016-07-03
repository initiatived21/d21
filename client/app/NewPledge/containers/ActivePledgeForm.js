import { connect } from 'react-redux'
import merge from 'lodash/merge'
import { setEntity } from '../../lib/actions/entityActions'
import PledgeForm from '../components/PledgeForm'

const mapStateToProps = function(state, ownProps) {
  // const editedPledge = state[ownProps.formObject.name]
  return {
    // editedPledge,
    // newPledge: new ownProps.formObject(editedPledge),
    // existingAttributes: assembleAttributesFromServer(ownProps.formData.object),
    availableTags: assembleTags(ownProps.tags),
  }
}

function assembleTags(tags) {
  return tags.map(function(tag) {
    return {
      value: tag.id,
      label: tag.name,
    }
  })
}

// function assembleAttributesFromServer(serializedReformObject) {
//   let attrs = merge({}, serializedReformObject.fields)
//   attrs.initiator = serializedReformObject.fields.initiator.fields
//   return attrs
// }

const mapDispatchToProps = dispatch => ({
    // ensurePledgeObjectExistence(formObject, editedPledge, existingAttributes) {
    //   if (editedPledge) { return }
    //   return dispatch(setEntity(
    //     formObject.constructor.name, existingAttributes
    //   ))
    // },
    //
    // onSubmit(formData) {
    //   // TODO: implement
    //   return true
    //   return dispatch(submitForm(formData))
    // }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm)
