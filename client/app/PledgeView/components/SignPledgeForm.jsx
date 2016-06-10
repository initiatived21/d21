import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import NewSignatureFormObject from '../../lib/form_objects/new_signature_form'

export default class SignPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    formData: PropTypes.shape({
      action: PropTypes.string.isRequired,
    }),
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { id, formData, onSubmit } = this.props;
    const newSignature = new NewSignatureFormObject(formData.object)

    return (
      <FormFor className="c-sign-pledge"
        onSubmit={onSubmit}
        object={newSignature}
        formData={formData}>
        <p>
          Ich unterzeichne dieses Versprechen.
        </p>

        <Input attribute='name' />

        <div>
          <Input type="checkbox" attribute='anonymous' />
        </div>

        <Input type="email" attribute='email' />
        <p>Ihre E-Mail wird nicht veröffentlicht.</p>

        <Input type="text" attribute='organization' />

        <div>
          <Input type="checkbox" attribute='contact_person' />
        </div>

        <Input type='textarea' attribute='reason' />

        <p><small>
          Mit Ihrer Unterschrift akzeptieren Sie die AGB und Datenschutzerklärung von "Projektname"
          und stimmen zu, dass Sie E-Mails über den Verlauf dieses Versprechens erhalten.
          Sie können sich jederzeit aus den Benachrichtigungen austragen lassen.
          Ist das Versprechen erfolgreich, werden Ihr Name und Ihre E-Mail-Adresse an den Initiator
          weitergegeben.
        </small></p>

        <button className="o-btn o-btn--small o-btn--full" type="submit">
          Unterzeichnen
        </button>
      </FormFor>
    );
  }
};
