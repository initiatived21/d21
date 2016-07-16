import React, { PropTypes } from 'react'
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
        object={NewQuestionFormObject}
        ajax={true}
        formData={formData}>

        <Input attribute='content' />

        <button className="o-btn" type="submit" disabled={isSubmitting}>
          {this.t('.submit')}
        </button>
      </FormFor>
    )
  }
}
