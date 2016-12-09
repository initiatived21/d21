import reducer from './searchLoadingState.js'
import { SET_SEARCH_LOADING_STATE } from '../constants/actionTypes'

describe('searchLoadingState reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.equal(false)
  })

  it('should return the state when given an unrecognized action', function() {
    reducer('xyz', {type: 'foo'}).should.equal('xyz')
  })

  it('should handle SET_SEARCH_LOADING_STATE with true state', function() {
    reducer(false, {
      type: SET_SEARCH_LOADING_STATE,
      state: true
    }).should.equal(
      true
    )
  })

  it('should handle SET_SEARCH_LOADING_STATE with false state', function() {
    reducer(true, {
      type: SET_SEARCH_LOADING_STATE,
      state: false
    }).should.equal(
      false
    )
  })
})
