import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewUpdateFormObject from '../../lib/form_objects/new_update_form'

export default class UpdateForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  }

  render() {
    const { formData, isSubmitting } = this.props
    return (
      <FormFor
        object={NewUpdateFormObject}
        ajax={true}
        formData={formData}>

        <h2>Neuigkeiten</h2>

        <Input attribute='content' type='textarea' />

        <button className="o-btn" type="submit" disabled={isSubmitting}>
          {this.t('.submit')}
        </button>
      </FormFor>
    )
  }
}
