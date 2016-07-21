import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'

import SignInForm from '../components/SignInForm'
import { toggleSignInFormVisibility, hideSignInForm } from '../actions/SignInFormActions'

const mapStateToProps = (state, ownProps) => ({
  formData: {
    action: '/users/sign_in',
    model: 'user'
  },
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

const OnClickOutsideWrappedComponent = onClickOutside(SignInForm)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnClickOutsideWrappedComponent)
