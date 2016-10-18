import reducer from './searchResults'
import { ADD_SEARCH_RESULTS } from '../constants/actionTypes'

describe('searchResults reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.eql([])
  })

  it('should return the state when given an unrecognized action', function() {
    const state = [1, 2, 3]

    reducer(state, {type: 'foo'}).should.eql(state)
  })

  it('should handle ADD_SEARCH_RESULTS', function() {
    const state = [1, 2, 3]
    const action = {
      type: ADD_SEARCH_RESULTS,
      resultIds: [4, 5, 6],
    }

    reducer(state, action).should.eql([1, 2, 3, 4, 5, 6])
  })

  // TODO: Make this work after launch
  it.skip('should return unique results when adding search results', function() {
    const state = [1, 2, 3]
    const action = {
      type: ADD_SEARCH_RESULTS,
      resultIds: [3, 4],
    }

    reducer(state, action).should.eql([1, 2, 3, 4])
  })
})
