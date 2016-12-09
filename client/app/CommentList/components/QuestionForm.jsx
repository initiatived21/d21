import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import NewQuestionFormObject from '../../lib/form_objects/new_question_form'

export default class QuestionForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    handleResponse: PropTypes.func.isRequired,
    afterResponse: PropTypes.func.isRequired,
    wasSubmitted: PropTypes.bool,
  }

  render() {
    const { formData, id, isSubmitting, handleResponse, afterResponse, wasSubmitted } = this.props

    let formOrMessage
    if (wasSubmitted) {
      formOrMessage = (
        <p className="u-mt u-mb">
          <strong>{this.t('.thank_you')}</strong><br/>
          {this.t('.question_received')}
        </p>
      )
    } else {
      formOrMessage = (
        <Form
          className="c-comment__question-form o-layout o-layout--small"
          formObjectClass={NewQuestionFormObject}
          id={`QuestionForm-${id}`}
          ajax={true}
          handleResponse={handleResponse}
          afterResponse={afterResponse}
          {...formData}>

          <InputSet
            ariaLabelOnly
            wrapperClassName="c-textarea c-textarea--narrow o-layout__item u-4/5@m u-mb-small@s"
            attribute="content"
            type="textarea"
          />

          <div className="o-layout__item u-1/5@m">
            <button className="c-comment__submit o-btn c-btn c-btn--primary"
              type="submit" disabled={isSubmitting}>
              {this.t('.submit')}
            </button>
          </div>
        </Form>
      )
    }

    return formOrMessage
  }
}
