#= require react
#= require components
#= require react-addons-test-utils
{ TestUtils } = React.addons

normalize = require('react/lib/normalization')

describe 'Normalization#normalize', ->
  before ->
    @pledge =
      id: 1, content: 'foo', initiator: { id: 2, name: 'Carl' }

  it 'should normalize a single pledge', ->
    expected =
      entities:
        pledges:
          1: @pledge
      result: 1
    output = normalize 'pledge', @pledge
    JSON.stringify(output).should.equal JSON.stringify(expected)

  it 'should normalize multiple pledges', ->
    pledge2 = { id: 3, content: 'bar', initiator: @pledge.initiator }
    pledges = [@pledge, pledge2]
    expected =
      entities:
        pledges:
          1: @pledge
          3: pledge2
      result: [1, 3]
    output = normalize 'pledges', pledges
    JSON.stringify(output).should.equal JSON.stringify(expected)
