import { signPledge, submitUpdate } from './sidebarActions'
import { SIGN_PLEDGE, SUBMIT_UPDATE } from '../../lib/constants/actionTypes'

describe ('actions', function() {
  it('should create an action to sign a pledge', function() {
    const id = 4
    const expectedAction = {
      type: SIGN_PLEDGE,
      id
    }

    signPledge(id).should.eql(expectedAction)
  })

  it('should create an action to submit an update', function() {
    const pledgeId = 4
    const expectedAction = {
      type: SUBMIT_UPDATE,
      pledgeId
    }

    submitUpdate(pledgeId).should.eql(expectedAction)
  })
})
