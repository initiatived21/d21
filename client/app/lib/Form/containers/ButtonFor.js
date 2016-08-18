import { connect } from 'react-redux'

import StandaloneButton from '../components/StandaloneButton'

const mapStateToProps = (state) => ({
  authToken: state.authToken,
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandaloneButton)
