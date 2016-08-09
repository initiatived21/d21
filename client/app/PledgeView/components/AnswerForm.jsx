import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
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
        className="o-layout o-layout--small u-mt-small"
        object={NewAnswerFormObject}
        ajax={true}
        method='put'
        formData={formData}>

        <Input className="c-input o-layout__item u-4/5"
          attribute='response' inlineLabel />

        <div className="o-layout__item u-1/5">
          <button className="o-btn o-btn--small o-btn--full c-btn c-btn--primary"
            type='submit' disabled={isSubmitting}>
            <FontAwesome name="paper-plane" />
            {' '}
            {this.t('.submit')}
          </button>
        </div>
      </FormFor>
    )
  }
}
