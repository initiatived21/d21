{ connect } = require('react-redux')
updateAction = require('../actions/updateAction')
InputComponent = require('../components/InputComponent')

mapStateToProps = (state, ownProps) ->
  errors:
    if ownProps.object
      errors = state.pledges[ownProps.object.constructor.name]
        .errors[ownProps.attribute] or []
      errors.concat(ownProps.serverErrors)

mapDispatchToProps = (dispatch) ->
  onChange: (attribute, value) ->
    dispatch updateAction('NewPledgeForm', attribute, value)
  # Frontend validations, unfinished:
  # onBlur: (attribute, formObject) ->
  #   errors = formObject.validate(attribute)
  #   return unless errors
  #   dispatch updateAction 'NewPledgeForm', 'errors', errors

connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent)
connected.isInput = true

module.exports = connected
