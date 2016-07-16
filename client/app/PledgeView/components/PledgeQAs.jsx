import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeQA from './PledgeQA'
import QuestionForm from './QuestionForm'

export default class PledgeQAs extends ChildComponent {
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

    let potentialQuestionForm
    if (userCanAskQuestions) {
      potentialQuestionForm =
        <QuestionForm formData={questionForm} isSubmitting={isSubmitting} />
    }

    return (
      <section className="o-layout__item">
        <h3>{this.t('.heading')}</h3>
        <dl>
          {comments.map( comment =>
            <PledgeQA key={comment.id} comment={comment}
              formData={answerForm}
              userCanAnswer={userCanAnswer} />
          )}
        </dl>

        {potentialQuestionForm}
      </section>
    )
  }
}
