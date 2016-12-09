import reducer from './askedQuestions.js'
import { ASK_QUESTION } from '../constants/actionTypes'

describe('askedQuestions reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.eql([])
  })

  it('should return the state when given an unrecognized action', function() {
    reducer([1, 2, 3], {type: 'foo'}).should.eql([1, 2, 3])
  })

  it('should handle ASK_QUESTION', function() {
    reducer([1, 2, 3], {
      type: ASK_QUESTION,
      pledgeId: 4
    }).should.eql(
      [1, 2, 3, 4]
    )
  })
})
