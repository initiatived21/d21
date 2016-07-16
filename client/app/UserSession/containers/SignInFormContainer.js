import { connect } from 'react-redux'
import SignInForm from '../components/SignInForm'

const mapStateToProps = (state, ownProps) => ({
  formData: {
    action: '/users/sign_in',
    model: 'user'
  }
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
