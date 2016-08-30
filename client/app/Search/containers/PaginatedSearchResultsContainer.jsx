import { connect } from 'react-redux'
import { values } from 'lodash'
import normalize from '../../lib/normalization'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PaginatedSearchResults from '../components/PaginatedSearchResults'
import { addEntities } from '../../lib/actions/entityActions'
import setSearchResultsLoadingState from '../actions/setSearchResultsLoadingState'
import { NUM_RESULTS_PAGINATION } from '../../lib/config'

const mapStateToProps = function(state, ownProps) {
  return {
    results: filterResults(deNormalizePledges(state), ownProps.resultIds),
    query: ownProps.query,
    resultCount: ownProps.total,
    isLoading: state.ui.searchResultsLoading,
  }
}

function filterResults(pledges, resultIds) {
  return pledges.filter(function(pledge) {
    return resultIds.includes(pledge.id)
  })
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onButtonClick: (offset) => {
      dispatch(setSearchResultsLoadingState(true))

      fetchMoreResults(dispatch, ownProps.query, offset, NUM_RESULTS_PAGINATION)
    }
  }
}

function fetchMoreResults (dispatch, query, offset, limit) {
  if (!query) { query = '' }

  // Ajax request
  fetch(`/de/pledges.json?query=${query}&range=${offset}..${offset + limit - 1}`)
    .then(function(response) {
      dispatch(setSearchResultsLoadingState(false))
      return response.json()
    }).then(function(json) {
      const pledges = json.pledges
      const normalizedPledges = normalize('pledges', pledges)
      dispatch(addEntities(normalizedPledges.entities))
    }).catch(function(ex) {
      console.error('parsing failed', ex)
    })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatedSearchResults)
