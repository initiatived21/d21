import React, { PropTypes }  from 'react'
import { Provider }          from 'react-redux'

import store                 from '../../lib/store.js'
import RootComponent         from '../../lib/Base/components/RootComponent.js'
import FilteredPledgeList    from '../containers/FilteredPledgeList.js'

export default class ElementList extends RootComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
    filter:  PropTypes.string.isRequired,
    maxPledges: PropTypes.number,
  };

  get objectsToForwardToState() {
    return ['pledges']
  }

  render() {
    const { filter, maxPledges } = this.props

    return(
      <Provider store={store}>
        <FilteredPledgeList filter={filter} maxPledges={maxPledges} />
      </Provider>
    )
  }
}
