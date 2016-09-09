import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeCommentList from '../components/PledgeCommentList'

const mapStateToProps = (state, ownProps) => {
  const comments =
    values(state.entities.comments).filter(
      comment => comment.pledge_id == ownProps.pledge_id
    )

  const currentPledge = state.entities.pledges[ownProps.pledge_id]
  let userCanAskQuestions
  if (state.currentUser !== null && currentPledge) {
    userCanAskQuestions = state.currentUser !== currentPledge.user_id
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
)(PledgeCommentList)
