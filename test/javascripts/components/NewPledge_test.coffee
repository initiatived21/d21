#= require react
#= require components
#= require react-addons-test-utils
{TestUtils} = React.addons

describe 'NewPledge', ->
  it 'should have a submit button', ->
    component = TestUtils.renderIntoDocument React.createElement(PledgeForm)
    input = TestUtils.findRenderedDOMComponentWithTag component, 'button'
    input.getDOMNode().innerHTML.should.equal 'Submit'
