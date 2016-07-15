import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeState extends ChildComponent {
  static propTypes = {
    remainingDays: PropTypes.number.isRequired,
    urgent: PropTypes.bool
  };

  render() {
    const { remainingDays, urgent } = this.props;
    const className = `c-pledge-state${urgent ? ' c-pledge-state--urgent' : ''}`;

    return (
      <p className={className}>
        <span className="c-pledge-state__still">noch</span>
        <br />
        <span className="c-pledge-state__number-of-days">{remainingDays}</span>
        <br />
        <span className="c-pledge-state__days">Tage</span>
      </p>
    );
  }
}
