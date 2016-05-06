{ connect } = require('react-redux')
{ setEntity } = require('../../lib/actions/entityActions')
PledgeForm = require('../components/PledgeForm')

mapStateToProps = (state, ownProps) ->
  editedPledge: state.pledges[ownProps.formObject.name]

mapDispatchToProps = (dispatch) ->
  ensurePledgeObjectExistence: (formObject, editedPledge) ->
    return if editedPledge
    dispatch setEntity(
      'pledge', formObject.constructor.name, formObject.attributes)

  onSubmit: (formData) ->
    dispatch submitForm(formData)

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm)
