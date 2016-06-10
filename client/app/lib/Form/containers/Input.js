import { connect } from 'react-redux';
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import updateAction from '../actions/updateAction';
import InputComponent from '../components/InputComponent';

const mapStateToProps = function(state, ownProps) {
  const formObjectName = ownProps.object.constructor.name
  const attrs = ownProps.object.attributes

  // get saved & server provided errors, concat them together
  let errors = null
  if (ownProps.errors) {
    errors = state.pledges[formObjectName].errors[ownProps.attribute] || []
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
  };
};

const mapDispatchToProps = dispatch =>
  ({
    onChange(formObjectName, attribute, submodel, value) {
      return dispatch(updateAction(formObjectName, attribute, submodel, value));
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
