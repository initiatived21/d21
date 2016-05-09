{ connect } = require('react-redux')
BaseForm = require('../components/BaseForm')

mapStateToProps = (state, ownProps) ->
  {}

mapDispatchToProps = (dispatch) ->
  onBlur: (field) ->
    dispatch validationAction(field)

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseForm)
