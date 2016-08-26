import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import NewQuestionFormObject from '../../lib/form_objects/new_question_form'

export default class QuestionForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  }

  render() {
    const { formData, isSubmitting } = this.props

    return (
      <Form
        className="o-layout o-layout--small u-mt-small"
        formObjectClass={NewQuestionFormObject}
        ajax={true}
        {...formData}>

        <InputSet ariaLabelOnly
          wrapperClassName="c-input o-layout__item u-4/5"
          attribute='content'
        />

        <div className="o-layout__item u-1/5">
          <button className="o-btn o-btn--small o-btn--full c-btn c-btn--primary"
            type="submit" disabled={isSubmitting}>
            <FontAwesome name="paper-plane" />
            {' '}
            {this.t('.submit')}
          </button>
        </div>
      </Form>
    )
  }
}
