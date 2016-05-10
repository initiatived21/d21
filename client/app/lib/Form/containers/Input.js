import { connect } from 'react-redux';
import updateAction from '../actions/updateAction';
import InputComponent from '../components/InputComponent';

const mapStateToProps = function(state, ownProps) {
  // get saved & server provided errors, concat them together
  let errors = null
  if (ownProps.errors) {
    errors = state.pledges[ownProps.object.constructor.name]
      .errors[ownProps.attribute] || []
    errors.concat(ownProps.serverErrors)
  }

  return {
    errors: errors
  };
};

const mapDispatchToProps = dispatch =>
  ({
    onChange(attribute, value) {
      return dispatch(updateAction('NewPledgeFormObject', attribute, value));
    }
  })
;
  // Frontend validations, unfinished:
  // onBlur: (attribute, formObject) ->
  //   errors = formObject.validate(attribute)
  //   return unless errors
  //   dispatch updateAction 'NewPledgeForm', 'errors', errors

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
connected.isInput = true;

export default connected;
