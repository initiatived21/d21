store = require('./store').default

describe 'store', ->
  it 'should have an empty initial state', ->
    store.getState().should.deep.equal { pledges: {} }
