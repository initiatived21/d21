import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent';
import PledgeTagList        from './PledgeTagList';
import PledgeText           from './PledgeText';
import PledgeInitiator      from './PledgeInitiator';
import PledgeDaysRemaining  from './PledgeDaysRemaining';
import PledgeProgress       from './PledgeProgress';
import SocialMediaButtons   from '../../SocialMediaButtons/components/SocialMediaButtons';
import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config';

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

    const remainingDays = this.getRemainingDays();
    const isUrgent = remainingDays <= 5 ? true : false;

    return (
      <li className="o-layout__item u-1/2@m u-1/3@l o-flipper">
        <article className="c-pledge-tile o-flipper__inner">
          <div className="c-pledge-tile__front o-flipper__front">
            <a className="c-pledge-tile__link o-box"
               href={this.getPledgePath()}>
              <PledgeTagList names={['Familie', 'Frauen', 'Kinder']} />
              <PledgeInitiator name="Max Mustermann" />
              <h2 className="c-pledge-tile__title">
                Schulbücher für Willkommensklassen
              </h2>
              <PledgeProgress
                amount={pledge.amount}
                signaturesCount={pledge.signatures_count}
                remainingDays={remainingDays}
                urgent={isUrgent}
              />
            </a>
          </div>

          <div className="c-pledge-tile__back o-flipper__back o-box">
            <div className="o-block o-block--center">
              <img src={`${DUMMY_IMAGE_PATH}/schwesig.jpg`} width="89" height="89" alt="" className="o-block__img" />
              <div className="o-block__body">
                <PledgeText
                  content={pledge.content}
                  amount={pledge.amount}
                  who={pledge.who}
                  requirement={pledge.requirement}
                />
              </div>
            </div>

            <div className="c-btn c-btn--center">
              <a href={this.getPledgePath()} className="o-btn o-btn--small">
                <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" /></svg>
                zum Versprechen
              </a>
            </div>

            <SocialMediaButtons url={DOMAIN_PROD + this.getPledgePath()} />
          </div>

        </article>
      </li>
    )
  }
};
