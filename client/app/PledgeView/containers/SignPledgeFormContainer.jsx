import { connect } from 'react-redux'
import merge from 'lodash/merge'

import submitSignPledgeForm from '../actions/submitSignPledgeForm'
import SignPledgeForm from '../components/SignPledgeForm'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: function(event) {
    event.preventDefault()
    const serializedData = $(event.target).serializeArray()
    console.log('serialized data', serializedData, ownProps)
    dispatch(submitSignPledgeForm(ownProps.formData.action, serializedData))
    return false
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignPledgeForm)
