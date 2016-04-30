#= require react
#= require components
#= require react-addons-test-utils
{ TestUtils } = React.addons

store = require('react/lib/store')

describe 'store', ->
  it 'should have an empty initial state', ->
    store.getState().should.deep.equal {}
