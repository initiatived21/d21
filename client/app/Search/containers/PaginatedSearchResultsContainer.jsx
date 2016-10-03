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
  return {
    results: filterResults(deNormalizePledges(state.entities), state.searchResults),
    query: ownProps.query,
    isLoading: state.searchLoadingState,
  }
}

function filterResults(pledges, resultIds) {
  return pledges.filter(function(pledge) {
    return resultIds.includes(pledge.id)
  })
}

const mapDispatchToProps = function(dispatch) {
  return {
    dispatch
  }
}

function fetchMoreResults (dispatch, query, offset, limit) {
  if (!query) { query = '' }

  // Ajax request
  fetch(localPath(`/pledges?query=${query}&range=${offset}..${offset + limit - 1}`), {
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

      fetchMoreResults(dispatch, ownProps.query, results.length, NUM_RESULTS_PAGINATION)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PaginatedSearchResults)
