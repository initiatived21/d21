import { connect } from 'react-redux'
import QuestionForm from '../components/QuestionForm'
import { askQuestion } from '../actions/commentListActions'
import { addEntities } from '../../lib/actions/entityActions'

const mapStateToProps = (state, ownProps) => ({
  isSubmitting: state.rform.isSubmitting.NewAnswerFormObject === true,
  wasSubmitted: state.askedQuestions.includes(ownProps.pledgeId),
})

const mapDispatchToProps = (dispatch) => ({
  handleResponse: (_formId, data) => dispatch(addEntities(data)),
  dispatch,
})

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { pledgeId } = ownProps
  const { dispatch } = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    afterResponse: function(response) {
      if (response.status === 'success') {
        dispatch(askQuestion(pledgeId))
      }
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(QuestionForm)
