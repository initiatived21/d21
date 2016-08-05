import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewQuestionFormObject from '../../lib/form_objects/new_question_form'

export default class PledgeQAs extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  }

  render() {
    const { formData, isSubmitting } = this.props

    return (
      <FormFor
        className="o-layout u-mt-small"
        object={NewQuestionFormObject}
        ajax={true}
        formData={formData}>

        <Input className="c-input o-layout__item u-3/4"
          attribute='content' inlineLabel />

        <div className="o-layout__item u-1/4">
          <button className="o-btn o-btn--small o-btn--full"
            type="submit" disabled={isSubmitting}>
            <FontAwesome name="paper-plane" />
            {' '}
            {this.t('.submit')}
          </button>
        </div>
      </FormFor>
    )
  }
}
