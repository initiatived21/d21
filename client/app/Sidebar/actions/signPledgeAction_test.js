import signPledgeAction from './signPledgeAction'

describe ('actions', function() {
  it('should create an action to sign a pledge', function() {
    const id = 4
    const expectedAction = {
      type: 'SIGN_PLEDGE',
      id
    }

    signPledgeAction(id).should.eql(expectedAction)
  })
})
