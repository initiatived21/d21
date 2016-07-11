import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeProgress extends ChildComponent {
  static propTypes = {
    amount:           PropTypes.number.isRequired,
    signaturesCount: PropTypes.number.isRequired
  };

  render() {
    const { amount, signaturesCount, remainingDays, urgent } = this.props;

    const percentage = Math.round(100 / amount * signaturesCount);

    return (
      <div className={`c-progress ${urgent ? 'c-progress--urgent ' : ''}o-media o-media--small`}>

        <p className="o-media__img c-progress__countdown">
          <span className="c-progress__still">noch</span>
          <br />
          <span className="c-progress__number-of-days">{remainingDays}</span>
          <br />
          <span className="c-progress__days">Tage</span>
        </p>

        <div className="o-media__body">
          <p className="u-pt-tiny">
            {signaturesCount} von {amount}<br />Unterzeichnern
          </p>

          <div className="c-progress__outer-bar" aria-hidden="true">
            <div className="c-progress__inner-bar" style={{ width: `${percentage}%` }}>
            </div>
          </div>
        </div>

      </div>

    );
  }
}
