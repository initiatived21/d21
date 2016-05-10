import _ from 'lodash';
import React, { PropTypes } from 'react';
import PledgeBrick from './PledgeBrick';
import ChildComponent from '../../lib/Base/components/ChildComponent';

export default class FilteredList extends ChildComponent {
  static propTypes = {
    pledges: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired
  }

  render() {
    const FILTERS = {
      successful: (e) => e.aasm_state == 'successful',
      active: (e) => e.aasm_state == 'active'
    }

    const { pledges, filter } = this.props
    const filteredList = _.pickBy(pledges, FILTERS[filter])

    return (
      <div className='FilteredList'>
        {Object.keys(filteredList).map( (id) =>
          <PledgeBrick key={id} pledge={filteredList[id]} />
        )}
      </div>
    )
  }
}
