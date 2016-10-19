import reducer from './currentUser'
import { SET_CURRENT_USER } from '../constants/actionTypes'

describe('currentUser reducer', function() {
  it('should return the initial state', function() {
    should.equal(reducer(undefined, {}), null)
  })

  it('should return the state when given an unrecognized action', function() {
    reducer(1, {type: 'foo'}).should.equal(1)
  })

  it('should handle SET_CURRENT_USER', function() {
    reducer(null, {
      type: SET_CURRENT_USER,
      id: 1
    }).should.equal(
      1
    )
  })
})
