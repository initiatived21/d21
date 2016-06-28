import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent';
import PledgeTagList        from './PledgeTagList';
import PledgeText           from './PledgeText';
import PledgeInitiator      from './PledgeInitiator';
import PledgeDaysRemaining  from './PledgeDaysRemaining';
import PledgeProgress       from './PledgeProgress';
import SocialMediaButtons   from '../../SocialMediaButtons/components/SocialMediaButtons';
import { DOMAIN_PROD }      from '../../lib/config';

export default class PledgeTile extends ChildComponent {
  static propTypes = {
    pledge: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      who: PropTypes.string.isRequired,
      requirement: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      signatures_count: PropTypes.number.isRequired,
      aasm_state: PropTypes.string.isRequired
    })
  };

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.pledge.id}`;
  }

  // provisional version
  // should update itself at 0:00 o'clock
  getRemainingDays() {
    const pledge_date = Date.parse(this.props.pledge.deadline);
    const now = Date.now();

    return Math.floor((pledge_date - now)/1000/60/60/24);
  }

  render() {
    const { pledge } = this.props;

    return (
      <li className="o-layout__item u-1/2@m u-1/3@l">
        <article className="c-pledge-tile">
          <a className="c-pledge-tile__link o-box o-box--small"
             href={this.getPledgePath()}>
            <PledgeTagList names={['Familie', 'Frauen', 'Kinder']} />
            <PledgeInitiator name="Max Mustermann" />
            <PledgeText
              content={pledge.content}
              amount={pledge.amount}
              who={pledge.who}
              requirement={pledge.requirement}
            />
            <PledgeDaysRemaining days={this.getRemainingDays()} />
            <PledgeProgress
              amount={pledge.amount}
              signatures_count={pledge.signatures_count}
            />
          </a>
          <SocialMediaButtons url={DOMAIN_PROD + this.getPledgePath()} />
        </article>
      </li>
    )
  }
};
