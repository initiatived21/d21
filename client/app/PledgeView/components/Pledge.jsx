import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

import TagList from './TagList';
import PledgeLocation from './PledgeLocation';
import PledgeQuote from './PledgeQuote';

export default class Pledge extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired
  };

  render() {
    const { content, amount, who, requirement, location } = this.props;

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
          {/* <PledgeFeatures /> */}
          {/* <SocialMediaButtons /> */}
          {/* <PledgeImage /> */}
          {/* <PledgeDescription /> */}
          {/* <PledgeCreatedAt /> */}
        </article>
      </div>
    );
  }
};
