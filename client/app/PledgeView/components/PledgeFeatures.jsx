import React, { PropTypes } from 'react';
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
          <p>{this.t('.initiator.title')}</p>
          <p>Microsoft Deutschland GmbH</p>
        </div>
        <div className="o-layout__item u-1/3">
          <p>{this.t('.signees.title')}</p>
          <p>{signatures_count} {this.t('.signees.of')} {amount}</p>
          <p>70&thinsp;% {this.t('.signees.of_goal')}</p>
        </div>
        <div className="o-layout__item u-1/3">
          <p>{this.t('.time.title')}</p>
          <p>5 {this.t('.time.days')}</p>
          <p>{this.t('.time.closes_on')} {deadline}.</p>
        </div>
      </div>
    );
  }
}
