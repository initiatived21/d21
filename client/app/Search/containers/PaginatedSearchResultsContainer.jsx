import { connect } from 'react-redux'
import { values } from 'lodash'

import normalize from '../../lib/normalization'
import PaginatedSearchResults from '../components/PaginatedSearchResults'
import { addEntities } from '../../lib/actions/entityActions'
import setSearchResultsLoadingState from '../actions/setSearchResultsLoadingState'

const fetchMoreResults = function(dispatch, query, offset, limit) {
  if (!query) { query = '' }

  // Ajax request
  fetch(`/de/pledges.json?query=${query}&range=${offset}..${offset + limit - 1}`)
    .then(function(response) {
      dispatch(setSearchResultsLoadingState(false))
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
      const pledges = json.pledges
      console.log(pledges.length)
      console.log(pledges)
      const normalizedPledges = normalize('pledges', pledges)
      dispatch(addEntities(normalizedPledges.entities))
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

const mapStateToProps = function(state, ownProps) {
  const results = values(state.pledges).map((pledge) => {
    pledge.initiator = state.users[pledge.initiator]
    return pledge
  })

  return {
    results,
    query: ownProps.query,
    resultCount: ownProps.total,
    isLoading: state.ui.searchResultsLoading
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onButtonClick: (offset) => {
      dispatch(setSearchResultsLoadingState(true))

      fetchMoreResults(dispatch, ownProps.query, offset, 1)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatedSearchResults)
