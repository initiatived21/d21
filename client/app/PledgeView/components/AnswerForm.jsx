import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeQuestion from './PledgeQuestion'
import PledgeAnswer from './PledgeAnswer'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewAnswerFormObject from '../../lib/form_objects/new_answer_form'

export default class AnswerForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }

  render() {
    const { formData, isSubmitting } = this.props
    return (
      <FormFor
        object={NewAnswerFormObject}
        ajax={true}
        method='put'
        formData={formData}>

        <Input className="c-input" attribute='response' />

        <button className="o-btn o-btn--small" type='submit' disabled={isSubmitting}>
          {this.t('.submit')}
        </button>
      </FormFor>
    )
  }
}
