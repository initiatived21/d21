import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeProgress extends ChildComponent {
  static propTypes = {
    amount:           PropTypes.number.isRequired,
    signatures_count: PropTypes.number.isRequired
  };

  render() {
    const { amount, signatures_count } = this.props;

    return (
      <p className="c-pledge-tile__signees u-tc">
        {signatures_count} von {amount} Unterzeichnern
      </p>
    );
  }
}
