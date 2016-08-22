import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import NewSignatureFormObject from '../../lib/form_objects/new_signature_form'
import Tooltip from '../../Tooltip/components/Tooltip'

import { PROJECT_NAME } from '../../lib/config'

export default class SignPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    formData: PropTypes.shape({
      action: PropTypes.string.isRequired,
    }),
    editedSignature: PropTypes.object,
    isSubmitting: PropTypes.bool.isRequired,
  }

  render() {
    const { formData, isSubmitting } = this.props

    return (
      <Form
        className="c-sidebar c-sidebar--secondary c-sign-pledge"
        ajax={true}
        formObjectClass={NewSignatureFormObject}
        {...formData}
      >
        <h2 className="c-sidebar__title">
          {this.t('.i_sign')}
        </h2>

        <div className="c-sidebar__wrapper">
          <InputSet className="c-input u-mb-small" attribute='name' />
          <InputSet
            className="c-checkbox u-mb-small"
            type="checkbox" attribute='anonymous'
          />
          <Tooltip>
            {this.t('.tooltip.anonymous')}
          </Tooltip>

          <InputSet className="c-input" type="email" attribute='email' />
          <p className="u-mb-small">{this.t('.email_hint')}</p>
          <Tooltip>
            {this.t('.tooltip.email')}
          </Tooltip>

          <InputSet
            className="c-input u-mb-small" type="text" attribute='organization'
          />

          <InputSet
            className="c-checkbox u-mb-small"
            type="checkbox" attribute='contact_person'
          />
          <Tooltip>
            {this.t('.tooltip.contact_person')}
          </Tooltip>

          <InputSet
            className="c-textarea u-mb-small" type='textarea' attribute='reason'
          />

          <p className="c-sign-pledge__small-print u-mb">
            <small>
              {this.t('.small_print', { project: PROJECT_NAME })}
            </small>
          </p>

          <button
            className="c-sign-pledge__submit o-btn o-btn--full c-btn c-btn--secondary"
            type="submit" disabled={isSubmitting}
          >
            <FontAwesome name="check" />
            {` ${this.t('.sign')}`}
          </button>
        </div>
      </Form>
    )
  }
}
