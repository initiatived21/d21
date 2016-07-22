import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'

import Session from '../components/Session'
import { toggleSignInFormVisibility, hideSignInForm } from '../actions/SignInFormActions'

const mapStateToProps = (state, ownProps) => ({
  isVisible: state.ui.signInFormVisible
})

const mapDispatchToProps = dispatch => ({
  onLoginClick: function(event) {
    event.preventDefault()
    dispatch(toggleSignInFormVisibility())
  },
  onWindowClick: function(event) {
    dispatch(hideSignInForm())
  }
})

const OnClickOutsideWrappedComponent = onClickOutside(Session)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnClickOutsideWrappedComponent)
