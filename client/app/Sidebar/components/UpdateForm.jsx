import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import NewUpdateFormObject from '../../lib/form_objects/new_update_form'

export default class UpdateForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  }

  render() {
    const {
      formData, isSubmitting, afterResponse, wasSubmitted
    } = this.props

    if (wasSubmitted) return null // TODO: or maybe display a success message

    return (
      <Form
        className="c-sidebar"
        formObjectClass={NewUpdateFormObject}
        ajax={true}
        afterResponse={afterResponse}
        {...formData}
      >
        <h2 className="c-sidebar__title">
          {this.t('.title')}
        </h2>

        <div className="c-sidebar__wrapper">
          <InputSet ariaLabelOnly
            wrapperClassName="c-textarea" attribute="content" type="textarea"
          />

          <button
            className="o-btn o-btn--small o-btn--full c-btn c-btn--primary"
            type="submit" disabled={isSubmitting}
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
