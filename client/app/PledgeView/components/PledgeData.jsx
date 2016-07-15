import React, { PropTypes } from 'react';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import Initiator from '../../PledgeData/components/Initiator';
import ProgressBar from '../../PledgeData/components/ProgressBar';
import PledgeState from '../../PledgeData/components/PledgeState';

export default class PledgeData extends ChildComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired
  };

  render() {
    const { amount, deadline, signatures_count } = this.props;

    return (
      <div className="c-pledge-data">
        <div className="o-layout">
          <div className="c-pledge-data__initiator o-layout__item u-1/3">
            <p className="c-pledge-data__title">{this.t('.initiator.title')}</p>
            <p>Microsoft Deutschland GmbH</p>
          </div>
          <div className="c-pledge-data__signees o-layout__item u-1/3">
            <p className="c-pledge-data__title">{this.t('.signees.title')}</p>
            <p>{signatures_count} {this.t('.signees.of')} {amount}<br />Unterzeichner</p>
            <ProgressBar percentage={50} />
            <p>70&thinsp;% {this.t('.signees.of_goal')}</p>
          </div>
          <div className="c-pledge-data__time o-layout__item u-1/3">
            <p className="c-pledge-data__title">{this.t('.time.title')}</p>
            <PledgeState remainingDays={5} urgent />
            <p className="u-mt-small"><b>{this.t('.time.closes_on')}:</b><br />{deadline}</p>
          </div>
        </div>
      </div>
    );
  }
}
