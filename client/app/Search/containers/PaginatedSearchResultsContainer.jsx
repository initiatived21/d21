import { connect } from 'react-redux';
import { values } from 'lodash';
import request from 'superagent';

import normalize from '../../lib/normalization';
import PaginatedSearchResults from '../components/PaginatedSearchResults';
import { addEntities } from '../../lib/actions/entityActions';
import setSearchResultsLoadingState from '../actions/setSearchResultsLoadingState';

const fetchMoreResults = function(dispatch, query, offset, limit) {
  // Ajax request
  setTimeout(function() {
    request
      .get('/de/pledges')
      .query({ query: query, range: `${offset}..${offset + limit - 1}` })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        dispatch(setSearchResultsLoadingState(false));

        if (!err) {
          const pledges = res.body.pledges;
          console.log(pledges.length);
          console.log(pledges);

          const normalizedPledges = normalize('pledges', pledges);
          dispatch(addEntities(normalizedPledges.entities));
        }
      });
    }, 2000);
};

const mapStateToProps = function(state, ownProps) {
  const results = values(state.pledges);

  return {
    results,
    query: ownProps.query,
    resultCount: ownProps.total,
    isLoading: state.ui.searchResultsLoading
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onButtonClick: (offset) => {
      dispatch(setSearchResultsLoadingState(true));

      fetchMoreResults(dispatch, ownProps.query, offset, 1);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatedSearchResults);
