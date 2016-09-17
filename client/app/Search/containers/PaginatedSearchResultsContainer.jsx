import { connect } from 'react-redux'
import normalize from '../../lib/normalization'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PaginatedSearchResults from '../components/PaginatedSearchResults'
import { addEntities } from '../../lib/actions/entityActions'
import { setSearchLoadingState } from '../actions/searchActions'
import { addSearchResults } from '../actions/searchActions'
import { NUM_RESULTS_PAGINATION } from '../../lib/config'

const mapStateToProps = function(state, ownProps) {
  return {
    results: filterResults(deNormalizePledges(state), state.searchResults),
    query: ownProps.query,
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
    dispatch
  }
}

function fetchMoreResults (dispatch, query, offset, limit) {
  if (!query) { query = '' }

  // Ajax request
  fetch(`/de/pledges.json?query=${query}&range=${offset}..${offset + limit - 1}`)
    .then(function(response) {
      dispatch(setSearchLoadingState(false))
      return response.json()
    }).then(function(json) {
      const pledges = json.pledges
      const normalizedPledges = normalize('pledges', pledges)
      dispatch(addEntities(normalizedPledges.entities))
      dispatch(addSearchResults(json.resultIds))
    })
}

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { results } = stateProps
  const { dispatch } = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    onButtonClick: () => {
      dispatch(setSearchLoadingState(true))

      fetchMoreResults(dispatch, ownProps.query, results.length, NUM_RESULTS_PAGINATION)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PaginatedSearchResults)
