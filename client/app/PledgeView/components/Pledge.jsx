import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import I18n from 'i18n-js';

import TagList from './TagList';
import PledgeLocation from './PledgeLocation';
import PledgeQuote from './PledgeQuote';
import PledgeFeatures from './PledgeFeatures';
import SocialMediaButtons from '../../SocialMediaButtons/components/SocialMediaButtons';
import PledgeImage from './PledgeImage';
import PledgeDescription from './PledgeDescription';
import PledgeCreatedAt from './PledgeCreatedAt';

import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config';

export default class Pledge extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired
  };

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.id}`;
  }

  render() {
    const { content, amount, who, requirement, location, deadline, signatures_count, created_at } = this.props;

    return (
      <div className="o-layout__item u-3/4@l">
        <article className="c-pledge">
          <TagList names={['Familie', 'Unterstützung']} />
          <h1>
            Schulbücher im Wert von 2.500 Euro
          </h1>
          {/*<PledgeLocation>{location}</PledgeLocation>*/}
          <PledgeQuote
            content={content}
            amount={amount}
            who={who}
            requirement={requirement}
          />
          <PledgeFeatures
            amount={amount}
            deadline={deadline}
            signatures_count={signatures_count}
          />
          <SocialMediaButtons url={DOMAIN_PROD + this.getPledgePath()} />
          <PledgeImage src={`${DUMMY_IMAGE_PATH}/peru-landscape.jpg`} />
          <PledgeDescription>
            Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi
            Graeco sermone tractavissent, ea Latinis litteris mandaremus, fore ut hic noster labor
            in varias reprehensiones incurreret. nam quibusdam, et iis quidem non admodum indoctis,
            totum hoc displicet philosophari. quidam autem non tam id reprehendunt, si remissius
            agatur, sed tantum studium tamque multam operam ponendam in eo non arbitrantur.
            erunt etiam, et ii quidem eruditi Graecis litteris, contemnentes Latinas, qui se dicant
            in Graecis legendis operam malle consumere. postremo aliquos futuros suspicor, qui me
            ad alias litteras vocent, genus hoc scribendi, etsi sit elegans, personae tamen et
            dignitatis esse negent.
          </PledgeDescription>
          <PledgeCreatedAt>{created_at}</PledgeCreatedAt>
        </article>
      </div>
    );
  }
};
