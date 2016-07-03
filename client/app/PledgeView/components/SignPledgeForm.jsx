import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewSignatureFormObject from '../../lib/form_objects/new_signature_form'

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

        <p>{this.t('.i_sign')}</p>

        <Input attribute='name' />

        <div>
          <Input type="checkbox" attribute='anonymous' />
        </div>

        <Input type="email" attribute='email' />
        <p>{this.t('.email_hint')}</p>

        <Input type="text" attribute='organization' />

        <div>
          <Input type="checkbox" attribute='contact_person' />
        </div>

        <Input type='textarea' attribute='reason' />

        <p><small>{this.t('.small_print', { project: 'Projektname' })}</small></p>

        <button className="o-btn o-btn--small o-btn--full" type="submit"
                disabled={isSubmitting}>
          {this.t('.sign')}
        </button>
      </FormFor>
    );
  }
};
