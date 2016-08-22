import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import NewAnswerFormObject from '../../lib/form_objects/new_answer_form'

export default class AnswerForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }

  render() {
    const { formData, isSubmitting, id } = this.props
    return (
      <Form
        className="o-layout o-layout--small u-mt-small"
        id={`AnswerForm${id}`}
        formObjectClass={NewAnswerFormObject}
        ajax={true}
        method='PUT'
        {...formData}
      >
        <InputSet ariaLabelOnly
          attribute='response' className="c-input o-layout__item u-4/5"
        />

        <div className="o-layout__item u-1/5">
          <button
            className="o-btn o-btn--small o-btn--full c-btn c-btn--primary"
            type='submit' disabled={isSubmitting}
          >
            <FontAwesome name="paper-plane" />
            {' '}
            {this.t('.submit')}
          </button>
        </div>
      </Form>
    )
  }
}
