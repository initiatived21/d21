import React, { PropTypes }  from 'react'
import { Provider }          from 'react-redux'

import store                 from '../../lib/store.js'
import RootComponent         from '../../lib/Base/components/RootComponent.js'
import FilteredPledgeList    from '../containers/FilteredPledgeList.js'

export default class ElementList extends RootComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
    filter:  PropTypes.string.isRequired
  };

  get objectsToForwardToState() {
    return ['pledges']
  }

  render() {
    return(
      <Provider store={store}>
        <FilteredPledgeList filter={this.props.filter} />
      </Provider>
    )
  }
}
