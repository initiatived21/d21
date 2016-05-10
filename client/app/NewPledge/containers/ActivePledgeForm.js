import { connect } from 'react-redux';
import { setEntity } from '../../lib/actions/entityActions';
import PledgeForm from '../components/PledgeForm';

const mapStateToProps = (state, ownProps) => ({
    editedPledge: state.pledges[ownProps.formObject.name]
  });

const mapDispatchToProps = dispatch => ({
    ensurePledgeObjectExistence(formObject, editedPledge) {
      if (editedPledge) { return }
      return dispatch(setEntity(
        'pledge', formObject.constructor.name, formObject.attributes))
    },

    onSubmit(formData) {
      return dispatch(submitForm(formData))
    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm);
