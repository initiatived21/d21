import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeComment from './PledgeComment'
import QuestionForm from './QuestionForm'

export default class PledgeCommentList extends ChildComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    forms: PropTypes.shape({
      questionForm: PropTypes.object.isRequired,
      answerForm: PropTypes.object.isRequired,
    }).isRequired,
    userCanAskQuestions: PropTypes.bool.isRequired,
    userCanAnswer: PropTypes.bool.isRequired,
  }

  render() {
    const {
      comments, object, forms, isSubmitting, userCanAskQuestions, userCanAnswer
    } = this.props
    const { questionForm, answerForm } = forms

    let commentListOrText
    if (comments.length > 0) {
      commentListOrText = (
        <div className="o-layout o-layout--small">
          {comments.map( comment =>
            <PledgeComment key={comment.id} comment={comment}
              formData={answerForm}
              userCanAnswer={userCanAnswer} />
          )}
        </div>
      )
    }
    else {
      commentListOrText = (<p>{this.t('.no_questions')}</p>)
    }

    let potentialQuestionForm
    if (userCanAskQuestions) {
      potentialQuestionForm =
        <QuestionForm formData={questionForm} isSubmitting={isSubmitting} />
    }

    return (
      <section className="u-2/3@l u-pr-small@l">
        <h2>{this.t('.heading')}</h2>

        {commentListOrText}

        {potentialQuestionForm}
      </section>
    )
  }
}
