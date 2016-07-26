import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent';
import TagList              from '../../TagList/components/TagList';
import InitiatorWithImage   from '../../PledgeData/components/InitiatorWithImage';
import PledgeState          from '../../PledgeData/components/PledgeState';
import ProgressBar          from '../../PledgeData/components/ProgressBar';
import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config';

export default class PledgeTileFront extends ChildComponent {
  static propTypes = {
    initiatorName: PropTypes.string.isRequired,
    initiatorImage: PropTypes.string,
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
    const { initiatorName, initiatorImage, title, deadline, signatures_count, signatures_total,
      path } = this.props;

    const remainingDays = this.getRemainingDays();
    const isUrgent = remainingDays <= 5 ? true : false;

    const percentage = Math.round(100 / signatures_total * signatures_count);

    return (
      <div className="c-pledge-tile__front o-flipper__front">
        <a className="c-pledge-tile__link o-box"
           href={path}>
          <TagList names={['Familie', 'Frauen', 'Kinder']} />
          <InitiatorWithImage imagePath={initiatorImage}>
            {initiatorName}
          </InitiatorWithImage>

          <div className="c-pledge-tile__title">
            <h2>{title}</h2>
          </div>

          <div className="o-media o-media--small">
            <div className="o-media__img">
              <PledgeState remainingDays={remainingDays} urgent={isUrgent} />
            </div>
            <div className="o-media__body">
              <p className="u-pt-tiny">
                {signatures_count} von {signatures_total}<br />Unterzeichnern
              </p>
              <ProgressBar percentage={percentage} urgent={isUrgent} />
            </div>
          </div>

        </a>
      </div>
    );
  }
};
