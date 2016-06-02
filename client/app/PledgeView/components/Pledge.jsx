import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

import TagList from './TagList';

export default class Pledge extends ChildComponent {
  static propTypes = {
  };

  render() {
    return (
      <div class="c-pledge">
        <TagList names={['Familie', 'Unterstützung']} />
        {/* <PledgeTextWithInitiator /> */}
        {/* <PledgeFeatures /> */}
        {/* <SocialMediaButtons /> */}
        {/* <PledgeImage /> */}
        {/* <PledgeDescription /> */}
      </div>
    );
  }
};
