import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewSignatureFormObject from '../../lib/form_objects/new_signature_form'

import { PROJECT_NAME } from '../../lib/config'

export default class SignPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    formData: PropTypes.shape({
      action: PropTypes.string.isRequired,
    }),
    editedSignature: PropTypes.object,
    // existingAttrs: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    // object: PropTypes.object.isRequired,
  }

  // componentWillMount() {
  //   const {
  //     editedSignature, existingAttrs, ensureStateObjectExistence, object
  //   } = this.props
  //   ensureStateObjectExistence(object, editedSignature, existingAttrs)
  // }

  render() {
    const { id, formData, onSubmit, object, isSubmitting } = this.props

    return (
      <FormFor
        className="c-sign-pledge"
        ajax={true}
        object={NewSignatureFormObject}
        formData={formData}>

        <h2 className="c-sign-pledge__title">
          {this.t('.i_sign')}
        </h2>

        <div className="c-sign-pledge__wrapper">

          <Input className="c-input" attribute='name' />

          <Input className="c-checkbox" type="checkbox" attribute='anonymous' />

          <Input className="c-input" type="email" attribute='email' />
          <p>{this.t('.email_hint')}</p>

          <Input className="c-input" type="text" attribute='organization' />

          <Input className="c-checkbox" type="checkbox" attribute='contact_person' />

          <Input className="c-textarea" type='textarea' attribute='reason' />

          <p className="c-sign-pledge__small-print u-mb">
            <small>
              {this.t('.small_print', { project: PROJECT_NAME })}
            </small>
          </p>

          <button className="c-sign-pledge__submit o-btn o-btn--full" type="submit"
                  disabled={isSubmitting}>
            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" fill="#fff"/>
            </svg>
            {` ${this.t('.sign')}`}
          </button>

        </div>

      </FormFor>
    );
  }
};
