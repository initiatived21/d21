{ TestUtils } = React.addons
{  Provider } = require('react-redux')
NewPledge = require('react/NewPledge/components/NewPledge')

describe 'NewPledge', ->
  formProps = null
  before ->
    formProps =
      onSubmit: ->
      formData:
        action: '/'
        authToken: 'a'
        model: 'pledge'

  it 'should have a submit button', ->
    render NewPledge, formProps, [], (tree) ->
      # element = React.createElement(NewPledge, formProps)
      # component = TestUtils.renderIntoDocument element
      input = TestUtils.scryRenderedDOMComponentsWithTag tree, 'button'
      input[1].innerText.should.equal 'Submit'
