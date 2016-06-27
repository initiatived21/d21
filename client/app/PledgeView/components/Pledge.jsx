import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

import TagList from './TagList';
import PledgeLocation from './PledgeLocation';
import PledgeQuote from './PledgeQuote';
import PledgeFeatures from './PledgeFeatures';
import SocialMediaButtons from '../../SocialMediaButtons/components/SocialMediaButtons';
import PledgeImage from './PledgeImage';
import PledgeDescription from './PledgeDescription';
import PledgeCreatedAt from './PledgeCreatedAt';

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

  render() {
    const { content, amount, who, requirement, location, deadline, signatures_count, created_at } = this.props;

    return (
      <div className="o-layout__item u-3/4@l">
        <article className="c-pledge">
          <TagList names={['Familie', 'Unterstützung']} />
          <PledgeLocation>{location}</PledgeLocation>
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
          <SocialMediaButtons url="http://www.example.com" />
          <PledgeImage src="/images/5000_laptops.png" />
          <PledgeDescription>Dummy description</PledgeDescription>
          <PledgeCreatedAt>{created_at}</PledgeCreatedAt>
        </article>
      </div>
    );
  }
};
