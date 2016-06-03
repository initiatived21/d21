import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

export default class SignPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  render() {
    const { id } = this.props;

    return (
      <form className="c-sign-pledge">
        <p>
          Ich unterzeichne dieses Versprechen.
        </p>

        <input type="text" placeholder="Name*" />

        <div>
          <input type="checkbox" />
          <label>Namen nicht veröffentlichen</label>
        </div>

        <input type="email" placeholder="E-Mail*" />
        <p>Ihre E-Mail wird nicht veröffentlicht.</p>

        <input type="text" placeholder="Unternehmen oder Organisation (optional)" />

        <div>
          <input type="checkbox" />
          <label>Ich bin Ansprechpartner</label>
        </div>

        <textarea placeholder="Ich unterstützte, weil … (optional)"></textarea>

        <p><small>
          Mit Ihrer Unterschrift akzeptieren Sie die AGB und Datenschutzerklärung von "Projektname"
          und stimmen zu, dass Sie E-Mails über den Verlauf dieses Versprechens erhalten.
          Sie können sich jederzeit aus den Benachrichtigungen austragen lassen.
          Ist das Versprechen erfolgreich, werden Ihr Name und Ihre E-Mail-Adresse an den Initiator
          weitergegeben.
        </small></p>

        <button className="o-btn o-btn--small o-btn--full" type="submit">Unterzeichnen</button>
      </form>
    );
  }
};
