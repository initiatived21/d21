import reducer from './authToken.js'
import { SET_AUTH_TOKEN } from '../constants/actionTypes'

describe('authToken reducer', function() {
  it('should return the initial state', function() {
    should.equal(reducer(undefined, {}), null)
  })

  it('should return the state when given an unrecognized action', function() {
    reducer('xyz', {type: 'foo'}).should.equal('xyz')
  })

  it('should handle SET_AUTH_TOKEN', function() {
    reducer(null, {
      type: SET_AUTH_TOKEN,
      token: 'xyz'
    }).should.equal(
      'xyz'
    )
  })
})
