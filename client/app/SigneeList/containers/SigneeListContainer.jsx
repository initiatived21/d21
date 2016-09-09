import { connect } from 'react-redux'
import values from 'lodash/values'
import SigneeList from '../components/SigneeList'

const mapStateToProps = (state, ownProps) => {
  const signatures =
    values(state.entities.signatures).filter(signature =>
      signature.pledge_id === ownProps.pledge_id && signature.confirmed
    )

  const currentPledge = state.entities.pledges[ownProps.pledge_id]
  const currentUser = state.currentUser

  let userIsInitiator
  if (currentUser !== null && currentPledge) {
    userIsInitiator = currentUser === currentPledge.user_id
  } else {
    userIsInitiator = false
  }

  const isSuccessful = currentPledge.aasm_state === 'successful'

  return {
    signatures,
    showPrivateData: userIsInitiator && isSuccessful
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigneeList)
