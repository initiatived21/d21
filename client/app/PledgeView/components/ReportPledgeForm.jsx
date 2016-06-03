import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

export default class ReportPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  render() {
    const { id } = this.props;

    return (
      <aside className="c-report-pledge">
        <p>
          Dir ist etwas Negatives an den Inhalten dieser Seite aufgefallen?
          Melde es an unsere Redaktion, und wir überprüfen die Seite.
        </p>

        <a className="o-btn o-btn--small o-btn--full" href="">Versprechen melden</a>
      </aside>
    );
  }
};
