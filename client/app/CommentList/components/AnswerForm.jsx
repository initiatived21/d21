import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import NewAnswerFormObject from '../../lib/form_objects/new_answer_form'

export default class AnswerForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    handleResponse: PropTypes.func.isRequired,
  }

  render() {
    const { formData, isSubmitting, id, handleResponse } = this.props

    return (
      <Form
        className="c-comment__answer-form o-layout o-layout--small"
        id={`AnswerForm-${id}`}
        formObjectClass={NewAnswerFormObject}
        ajax={true}
        method='PUT'
        handleResponse={handleResponse}
        {...formData}>

        <InputSet
          ariaLabelOnly
          wrapperClassName="c-textarea c-textarea--narrow o-layout__item u-4/5@m u-mb-small@s"
          attribute="response"
          type="textarea"
        />

        <div className="o-layout__item u-1/5@m">
          <button
            className="c-comment__submit o-btn c-btn c-btn--primary"
            type='submit' disabled={isSubmitting}
          >
            {this.t('.submit')}
          </button>
        </div>
      </Form>
    )
  }
}
