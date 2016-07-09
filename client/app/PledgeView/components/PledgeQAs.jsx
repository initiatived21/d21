import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeQA from './PledgeQA'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewQuestionFormObject from '../../lib/form_objects/new_question_form'

export default class PledgeQAs extends ChildComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    formData: PropTypes.shape({
      questionForm: PropTypes.object.isRequired,
      answerForm: PropTypes.object.isRequired,
    }).isRequired,
  }

  render() {
    const { comments, object, formData, isSubmitting } = this.props

    return (
      <section className="o-layout__item">
        <h3>{this.t('.heading')}</h3>
        <dl>
          {comments.map( comment =>
          <PledgeQA key={comment.id} comment={comment}
                    formData={formData.answerForm} />
          )}
        </dl>
        <FormFor
          object={NewQuestionFormObject}
          ajax={true}
          formData={formData.questionForm}>

          <Input attribute='content' />

          <button className="o-btn" type="submit" disabled={isSubmitting}>
            {this.t('.submit')}
          </button>
        </FormFor>
      </section>
    )
  }
}
