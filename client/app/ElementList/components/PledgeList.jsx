import React, { PropTypes } from 'react';
import PledgeTile           from '../../PledgeTile/components/PledgeTile';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeList extends ChildComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired
  }

  render() {
    const { pledges } = this.props;

    return (
      <div className='o-layout'>
        {pledges.map( (pledge) =>
          <div className="o-layout__item u-1/2@m u-1/3@l">
            <PledgeTile key={pledge.id} pledge={pledge} />
          </div>
        )}
      </div>
    );
  }
}
