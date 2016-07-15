import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeDaysRemaining extends ChildComponent {
  static propTypes = {
    days: PropTypes.number.isRequired
  };

  pluralized_days() {
    if (this.props.days === 1) {
      return 'Tag';
    }
    else {
      return 'Tage';
    }
  }

  render() {
    const { days } = this.props;

    return (
      <p className="c-pledge-tile__days u-tc">
        Noch {days} {this.pluralized_days()}
      </p>
    );
  }
}
