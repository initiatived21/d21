import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeComment from './PledgeComment'
import QuestionFormContainer from '../containers/QuestionFormContainer'

export default class PledgeCommentList extends ChildComponent {
  static propTypes = {
    pledge_id: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
    forms: PropTypes.shape({
      questionForm: PropTypes.object.isRequired,
      answerForm: PropTypes.object.isRequired,
    }).isRequired,
    userCanAskQuestions: PropTypes.bool.isRequired,
    userCanAnswer: PropTypes.bool.isRequired,
    questionFormId: PropTypes.number.isRequired,
  }

  render() {
    const {
      pledge_id, comments, forms, userCanAskQuestions, userCanAnswer, questionFormId
    } = this.props
    const { questionForm, answerForm } = forms

    let commentListOrText
    if (comments.length > 0) {
      commentListOrText = (
        <div>
          {comments.map( comment =>
            <PledgeComment key={comment.id} comment={comment}
              formData={answerForm}
              userCanAnswer={userCanAnswer} />
          )}
        </div>
      )
    }
    else {
      commentListOrText = (<p className="u-mb">{this.t('.no_questions')}</p>)
    }

    let potentialQuestionForm
    if (userCanAskQuestions) {
      potentialQuestionForm =
        <QuestionFormContainer formData={questionForm} id={questionFormId} pledgeId={pledge_id} />
    }

    return (
      <section className="u-mb">
        <h2>{this.t('.heading')}</h2>

        {commentListOrText}

        {potentialQuestionForm}
      </section>
    )
  }
}
