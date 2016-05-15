import React, { PropTypes }  from 'react';
import { Provider }          from 'react-redux';

import store                 from '../../lib/store.js';
import { addEntities }       from '../../lib/actions/entityActions.js';
import RootComponent         from '../../lib/Base/components/RootComponent.js';
import FilteredListContainer from '../containers/FilteredListContainer.js';
import normalize             from '../../lib/normalization.js';

export default class ElementList extends RootComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
    filter:  PropTypes.string.isRequired
  };

  componentWillMount() {
    // Put received pledges into store
    const normalizedPledges = normalize('pledges', this.props.pledges);
    return store.dispatch(addEntities(normalizedPledges.entities));
  }

  render() {
    return(
      <Provider store={store}>
        <FilteredListContainer filter={this.props.filter} />
      </Provider>
    );
  }
};
