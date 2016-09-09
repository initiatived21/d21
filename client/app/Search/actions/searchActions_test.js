import * as actions from './searchActions'
import * as types from '../../lib/constants/actionTypes'

describe ('actions', function() {
  it('should create an action to add search results', function() {
    const resultIds = [1, 2, 3]
    const expectedAction = {
      type: types.ADD_SEARCH_RESULTS,
      resultIds
    }

    actions.addSearchResults(resultIds).should.eql(expectedAction)
  })

  it('should create an action to set the search loading state', function() {
    const state = true
    const expectedAction = {
      type: types.SET_SEARCH_LOADING_STATE,
      state
    }

    actions.setSearchLoadingState(state).should.eql(expectedAction)
  })
})
