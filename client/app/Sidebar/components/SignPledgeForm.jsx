import React, { PropTypes } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import NewSignatureFormObject from '../../lib/form_objects/new_signature_form'
import Tooltip from '../../Tooltip/components/Tooltip'
import PledgeSignedMessage from './PledgeSignedMessage'

import { PROJECT_NAME } from '../../lib/config'

export default class SignPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    formData: PropTypes.shape({
      action: PropTypes.string.isRequired,
    }),
    handleResponse: PropTypes.func.isRequired,
    afterResponse: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    isAlreadySigned: PropTypes.bool.isRequired
  }

  render() {
    const { formData, isSubmitting, handleResponse, afterResponse, isAlreadySigned } = this.props

    return isAlreadySigned ? <PledgeSignedMessage /> : (
      <Form
        className="c-sidebar c-sidebar--secondary c-sign-pledge"
        ajax={true}
        formObjectClass={NewSignatureFormObject}
        handleResponse={handleResponse}
        afterResponse={afterResponse}
        {...formData}
      >
        <h2 className="c-sidebar__title">
          {this.t('.i_sign')}
        </h2>

        <div className="c-sidebar__wrapper">
          <InputSet wrapperClassName="c-input u-mb-small" attribute='name' />

          <div className="o-marginal u-mb-small">
            <InputSet
              wrapperClassName="c-checkbox o-marginal__content"
              type="checkbox" attribute="anonymous" labelAfterInput
            />
            <Tooltip className="o-marginal__note">
              {this.t('.tooltip.anonymous')}
            </Tooltip>
          </div>

          <InputSet wrapperClassName="c-input" type="email" attribute='email' />

          <div className="o-marginal u-mb-small">
            <p className="o-marginal__content">{this.t('.email_hint')}</p>
            <Tooltip className="o-marginal__note">
              {this.t('.tooltip.email')}
            </Tooltip>
          </div>

          <InputSet
            wrapperClassName="c-input u-mb-small" type="text" attribute="organization"
          />

          <div className="o-marginal u-mb-small">
            <InputSet
              wrapperClassName="c-checkbox o-marginal__content"
              type="checkbox" attribute="contact_person" labelAfterInput
            />
            <Tooltip className="o-marginal__note">
              {this.t('.tooltip.contact_person')}
            </Tooltip>
          </div>

          <InputSet
            wrapperClassName="c-textarea u-mb-small" type='textarea' attribute='reason'
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
