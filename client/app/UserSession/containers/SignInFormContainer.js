import { connect } from 'react-redux'
import SignInForm from '../components/SignInForm'
import toggleSignInFormVisibility from '../actions/toggleSignInFormVisibility'

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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
