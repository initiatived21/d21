import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeQuestion from './PledgeQuestion'
import PledgeAnswer from './PledgeAnswer'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewQuestionFormObject from '../../lib/form_objects/new_question_form'

export default class PledgeQAs extends ChildComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  render() {
    const { comments, object, formData, isSubmitting } = this.props

    return (
      <section className="o-layout__item">
        <h3>{this.t('.heading')}</h3>
        <dl>
          {comments.map( comment =>
            <div class='PledgeComment' key={comment.id}>
              <PledgeQuestion>{comment.content}</PledgeQuestion>
              <PledgeAnswer>{comment.response}</PledgeAnswer>
            </div>
          )}
        </dl>
        <FormFor
          ajax={true}
          object={NewQuestionFormObject}
          formData={formData}>

          <Input attribute='content' />

          <button className="o-btn" type="submit" disabled={isSubmitting}>
            {this.t('.sign')}
          </button>
        </FormFor>
      </section>
    )
  }
}
