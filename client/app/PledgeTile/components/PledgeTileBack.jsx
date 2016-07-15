import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent';
import PledgeText           from './PledgeText';
import SocialMediaButtons   from '../../SocialMediaButtons/components/SocialMediaButtons';
import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config';

export default class PledgeTileBack extends ChildComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { content, amount, who, requirement, path } = this.props;

    return (
      <div className="c-pledge-tile__back o-flipper__back o-box">
        <div className="o-block o-block--center">
          <img src={`${DUMMY_IMAGE_PATH}/schwesig.jpg`} width="89" height="89" alt="" className="o-block__img" />
          <div className="o-block__body">
            <PledgeText
              content={content}
              amount={amount}
              who={who}
              requirement={requirement}
            />
          </div>
        </div>
        <div className="c-btn c-btn--center">
          <a href={path} className="o-btn o-btn--small">
            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" /></svg>
            zum Versprechen
          </a>
        </div>
        <SocialMediaButtons url={`${DOMAIN_PROD}${path}`} />
      </div>
    );
  }
};
