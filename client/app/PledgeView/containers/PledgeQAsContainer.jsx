import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeQAs from '../components/PledgeQAs'

const mapStateToProps = (state, ownProps) => {
  const comments =
    values(state.comments).filter(
      comment => comment.pledge_id == ownProps.pledge_id
    )

  const currentPledge = state.pledges[ownProps.pledge_id]
  let userCanAskQuestions
  if (state.currentUser && currentPledge) {
    userCanAskQuestions = state.currentUser.id != currentPledge.user_id
  } else {
    userCanAskQuestions = true
  }

  return {
    comments,
    userCanAskQuestions,
    userCanAnswer: !userCanAskQuestions,
    isSubmitting: false, // TODO
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeQAs)
