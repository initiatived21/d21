import reducer from './signedPledges.js'
import { SIGN_PLEDGE } from '../constants/actionTypes'

describe('signedPledges reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.eql([])
  })

  it('should return the state when given an unrecognized action', function() {
    reducer([1, 2, 3], {type: 'foo'}).should.eql([1, 2, 3])
  })

  it('should handle SIGN_PLEDGE', function() {
    reducer([1, 2, 3], {
      type: SIGN_PLEDGE,
      id: 4
    }).should.eql(
      [1, 2, 3, 4]
    )
  })
})
