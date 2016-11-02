import { connect } from 'react-redux'
import normalize from '../../lib/normalization'
import deNormalizePledges from '../../lib/state/deNormalizePledges'
import PaginatedSearchResults from '../components/PaginatedSearchResults'
import { addEntities } from '../../lib/actions/entityActions'
import { setSearchLoadingState } from '../actions/searchActions'
import { addSearchResults } from '../actions/searchActions'
import { NUM_RESULTS_PAGINATION } from '../../lib/config'
import localPath from '../../lib/browser/localPath'

const mapStateToProps = function(state, ownProps) {
  let results = applySearchResults(deNormalizePledges(state.entities), state.searchResults)

  // TODO: Normal search results are not sorted yet, only "all pledges" or empty queries.
  // Filtering is also not applied to normal searches because it is the same way in backend.
  if (ownProps.query === '') {
    results = sortResults(filterResults(results, ownProps.filter))
  }

  return {
    results,
    query: ownProps.query,
    isLoading: state.searchLoadingState,
  }
}

function sortResults(pledges) {
  return pledges.sort(function(a, b) {
    // Sort on creation time, descending, first
    let difference = Date.parse(b.created_at) - Date.parse(a.created_at)

    // Sort on id, ascending, third
    if (difference === 0) {
      difference = a.id - b.id
    }

    return difference
  })
}

function filterResults(pledges, filter) {
  if (filter === '') {
    return pledges
  } else {
    return pledges.filter(function(pledge) {
      return pledge.aasm_state === filter
    })
  }
}

function applySearchResults(pledges, resultIds) {
  return pledges.filter(function(pledge) {
    return resultIds.includes(pledge.id)
  })
}

const mapDispatchToProps = function(dispatch) {
  return {
    dispatch
  }
}

function fetchMoreResults (dispatch, query, filter, offset, limit) {
  if (!query) { query = '' }

  // Ajax request
  fetch(localPath(`/pledges?query=${query}&filter=${filter}&range=${offset}..${offset + limit - 1}`), {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(function(response) {
      dispatch(setSearchLoadingState(false))
      return response.json()
    }).then(function(json) {
      addPledgesAndSearchResults(dispatch, json)
    })
}

function addPledgesAndSearchResults(dispatch, jsonData) {
  const pledges = jsonData.pledges
  const normalizedPledges = normalize('pledges', pledges)
  dispatch(addEntities(normalizedPledges.entities))
  dispatch(addSearchResults(jsonData.resultIds))
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

      fetchMoreResults(dispatch, ownProps.query, ownProps.filter, results.length, NUM_RESULTS_PAGINATION)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PaginatedSearchResults)
