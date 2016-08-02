import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import I18n from 'i18n-js';

import TagList from '../../TagList/components/TagList';
import PledgeLocation from './PledgeLocation';
import PledgeQuote from './PledgeQuote';
import PledgeData from './PledgeData';
import SocialMediaButtons from '../../SocialMediaButtons/components/SocialMediaButtons';
import PledgeImage from './PledgeImage';
import PledgeDescription from './PledgeDescription';
import PledgeCreatedAt from './PledgeCreatedAt';

import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config';

export default class Pledge extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    image: PropTypes.object,
    signatures_count: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  };

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.id}`;
  }

  render() {
    const { title, content, amount, who, requirement, location, deadline, image, signatures_count,
      created_at, user } = this.props;

    const initiator = user.organization ? user.organization : user.name
    const pledgeImage = image.url ? (<PledgeImage src={image.url} />) : null

    return (
      <div className="o-layout__item u-2/3@l">
        <article className="c-pledge">
          <TagList names={['Familie', 'Unterstützung']} />
          <h1>
            {title}
          </h1>
          {/*<PledgeLocation>{location}</PledgeLocation>*/}
          <PledgeQuote
            imagePath={user.avatar.url}
            initiatorName={initiator}
            content={content}
            amount={amount}
            who={who}
            requirement={requirement}
          />
          <PledgeData
            initiator={initiator}
            amount={amount}
            deadline={deadline}
            signatures_count={signatures_count}
          />
          <SocialMediaButtons className="u-mt-small" url={DOMAIN_PROD + this.getPledgePath()} />
          {pledgeImage}
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
