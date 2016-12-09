import reducer from './submittedUpdates.js'
import { SUBMIT_UPDATE } from '../constants/actionTypes'

describe('submittedUpdates reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.eql([])
  })

  it('should return the state when given an unrecognized action', function() {
    reducer([1, 2, 3], {type: 'foo'}).should.eql([1, 2, 3])
  })

  it('should handle SUBMIT_UPDATE', function() {
    reducer([1, 2, 3], {
      type: SUBMIT_UPDATE,
      pledgeId: 4
    }).should.eql(
      [1, 2, 3, 4]
    )
  })
})
