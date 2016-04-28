{ connect } = require('react-redux')
submitForm = require('../actions/submitForm')
PledgeForm = require('../components/PledgeForm')

mapStateToProps = (state) ->
  foo: 'bar'

mapDispatchToProps = (dispatch) ->
  onSubmit: (formData) ->
    dispatch submitForm(formData)

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm)
