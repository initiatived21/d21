import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeCommentList from '../components/PledgeCommentList'

const mapStateToProps = (state, ownProps) => {
  const pledgeId = ownProps.pledge_id
  const ownComments = filterOwnComments(values(state.entities.comments), pledgeId)

  // The question form should be rendered with a unique id so that it gets cleared on submit
  const questionFormId = ownComments.length
  const comments = filterApprovedComments(ownComments)
  const currentPledge = state.entities.pledges[pledgeId]

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
    questionFormId
  }
}

export const filterOwnComments = function(comments, pledgeId) {
  return comments.filter(
    comment => (parseInt(comment.pledge_id) === pledgeId)
  )
}

export const filterApprovedComments = function(comments) {
  return comments.filter(
    comment => (comment.aasm_state === 'approved')
  )
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeCommentList)
