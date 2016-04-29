#= require react
#= require components
#= require react-addons-test-utils
{ TestUtils } = React.addons
PledgeForm = require('react/NewPledge/components/PledgeForm')

formProps =
  onSubmit: ->
  formData:
    action: '/'
    authToken: 'a'
    model: 'pledge'

describe 'NewPledge', ->
  before ->
    @element = React.createElement(PledgeForm, formProps)


  it 'should have a submit button', ->
    component = TestUtils.renderIntoDocument @element
    input = TestUtils.findRenderedDOMComponentWithTag component, 'button'
    input.innerText.should.equal 'Submit'
