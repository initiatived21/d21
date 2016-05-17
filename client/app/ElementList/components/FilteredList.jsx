import _                    from 'lodash';
import React, { PropTypes } from 'react';
import PledgeTile           from './PledgeTile.jsx';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class FilteredList extends ChildComponent {
  static propTypes = {
    pledges: PropTypes.object.isRequired,
    filter:  PropTypes.string.isRequired
  }

  render() {
    const FILTERS = {
      successful: (e) => e.aasm_state === 'successful',
      active:     (e) => e.aasm_state === 'active'
    }

    const filteredList = _.pickBy(this.props.pledges, FILTERS[this.props.filter])

    return (
      <div className='o-layout FilteredList'>
        {Object.keys(filteredList).map( (id) =>
          <div className="o-layout__item u-1/2@m u-1/3@l">
            <PledgeTile key={id} pledge={filteredList[id]} />
          </div>
        )}
      </div>
    );
  }
}
