import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'
import { addEntities } from '../../lib/actions/entityActions';
import RootComponent from '../../lib/Base/components/RootComponent';
import FilteredListContainer from '../containers/FilteredListContainer';
import normalize from '../../lib/normalization';

export default class ElementList extends RootComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
  };

  componentWillMount() {
    // Put received pledges into store
    const normalizedPledges = normalize('pledges', this.props.pledges);
    return store.dispatch(addEntities(normalizedPledges.entities));
  }

  render() {
    const { filter } = this.props

    return(
      <Provider store={store}>
        <FilteredListContainer filter={filter} />
      </Provider>
    );
  }
};
