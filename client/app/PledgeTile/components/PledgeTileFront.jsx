import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent';
import TagList              from '../../TagList/components/TagList';
import PledgeInitiator      from './PledgeInitiator';
import PledgeDaysRemaining  from './PledgeDaysRemaining';
import PledgeProgress       from './PledgeProgress';
import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config';

export default class PledgeTileFront extends ChildComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired,
    signatures_total: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired
  };

  // provisional version
  // should update itself at 0:00 o'clock
  getRemainingDays() {
    const pledge_date = Date.parse(this.props.deadline);
    const now = Date.now();

    return Math.floor((pledge_date - now)/1000/60/60/24);
  }

  render() {
    const { title, deadline, signatures_count, signatures_total, path } = this.props;

    const remainingDays = this.getRemainingDays();
    const isUrgent = remainingDays <= 5 ? true : false;

    return (
      <div className="c-pledge-tile__front o-flipper__front">
        <a className="c-pledge-tile__link o-box"
           href={path}>
          <TagList names={['Familie', 'Frauen', 'Kinder']} />
          <PledgeInitiator name="Max Mustermann" />
          <div className="c-pledge-tile__title">
            <h2>
              {title}
            </h2>
          </div>
          <PledgeProgress
            amount={signatures_total}
            signaturesCount={signatures_count}
            remainingDays={remainingDays}
            urgent={isUrgent}
          />
        </a>
      </div>
    );
  }
};
