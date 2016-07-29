import React, { PropTypes } from 'react';
import PledgeTile           from '../../PledgeTile/components/PledgeTile';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeList extends ChildComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
    showControls: PropTypes.bool,
  }

  render() {
    const { pledges, showControls } = this.props;

    return (
      <ul className='o-layout'>
        {pledges.map( (pledge) =>
          <PledgeTile
            key={pledge.id} pledge={pledge} showControls={showControls}
          />
        )}
      </ul>
    );
  }
}
