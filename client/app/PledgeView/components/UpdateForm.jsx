import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
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
        className="c-sidebar"
        object={NewUpdateFormObject}
        ajax={true}
        formData={formData}>

        <h2 className="c-sidebar__title">
          {this.t('.title')}
        </h2>

        <div className="c-sidebar__wrapper">
          <Input className="c-textarea" attribute="content" type="textarea" inlineLabel />

          <button className="o-btn o-btn--small o-btn--full c-btn c-btn--primary"
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
