import { connect } from 'react-redux'
import values from 'lodash/values'
import SigneeList from '../components/SigneeList'

const mapStateToProps = (state, ownProps) => {
  const signatures =
    values(state.signatures).filter(signature =>
      signature.pledge_id === ownProps.pledge_id && signature.confirmed
    )

  return {
    signatures
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigneeList)
