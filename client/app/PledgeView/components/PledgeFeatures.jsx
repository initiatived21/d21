import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeFeatures extends ChildComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired
  };

  render() {
    const { amount, deadline, signatures_count } = this.props;

    return (
      <div className="o-layout">
        <div className="o-layout__item u-1/3">
          <p>Initiator</p>
          <p>Microsoft Deutschland GmbH</p>
        </div>
        <div className="o-layout__item u-1/3">
          <p>Unterzeichner</p>
          <p>{signatures_count} von {amount}</p>
          <p>70% vom Ziel</p>
        </div>
        <div className="o-layout__item u-1/3">
          <p>Zeit übrig</p>
          <p>5 Tage</p>
          <p>Endet am {deadline}.</p>
        </div>
      </div>
    );
  }
}
