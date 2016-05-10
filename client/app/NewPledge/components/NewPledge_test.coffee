React = require('react')
{ mount } = require('enzyme')
NewPledge = require('./NewPledge').default

describe 'NewPledge', ->
  formProps =
    onSubmit: ->
    formData:
      action: '/'
      authToken: 'a'
      model: 'pledge'

  it 'should have a submit button', ->
    wrapper = mount(React.createElement(NewPledge, formProps))
    inputs = wrapper.find('button')
    inputs.length.should.equal 2
    inputs.last().text().should.include 'submit'
