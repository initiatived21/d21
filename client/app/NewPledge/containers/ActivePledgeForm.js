import { connect } from 'react-redux';
import { setEntity } from '../../lib/actions/entityActions';
import PledgeForm from '../components/PledgeForm';

const mapStateToProps = function(state, ownProps) {
  const editedPledge = state.pledges[ownProps.formObject.name]
  return {
    editedPledge,
    newPledge: new ownProps.formObject(editedPledge),
    availableTags: assembleTags(ownProps.tags),
  }
};

function assembleTags(tags) {
  return tags.map(function(tag) {
    return {
      value: tag.name,
      label: tag.name,
    }
  })
}

const mapDispatchToProps = dispatch => ({
    ensurePledgeObjectExistence(formObject, editedPledge, existingAttributes) {
      if (editedPledge) { return }
      return dispatch(setEntity(
        'pledge', formObject.constructor.name, existingAttributes))
    },

    onSubmit(formData) {
      // TODO: implement
      return true
      return dispatch(submitForm(formData))
    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm);
