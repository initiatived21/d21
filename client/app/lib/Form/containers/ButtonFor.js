import { connect } from 'react-redux'
import merge from 'lodash/merge'

import { setEntity } from '../../actions/entityActions'
import submitAjaxForm from '../actions/submitAjaxForm'
import StandaloneButton from '../components/StandaloneButton'

const mapStateToProps = (state, ownProps) => ({
  authToken: state.authToken,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandaloneButton)
