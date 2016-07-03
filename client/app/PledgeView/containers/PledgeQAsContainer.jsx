import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeQAs from '../components/PledgeQAs'
import NewQuestionFormObject from '../../lib/form_objects/new_question_form'

const mapStateToProps = (state, ownProps) => {
  const comments =
    values(state.comments).filter(
      comment => comment.pledge_id == ownProps.pledge_id
    )

  return {
    comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeQAs)
