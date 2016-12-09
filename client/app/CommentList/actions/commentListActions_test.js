import { askQuestion } from './commentListActions'
import { ASK_QUESTION } from '../../lib/constants/actionTypes'

describe ('actions', function() {
  it('should create an action to ask a question', function() {
    const pledgeId = 3
    const expectedAction = {
      type: ASK_QUESTION,
      pledgeId
    }

    askQuestion(pledgeId).should.eql(expectedAction)
  })
})
