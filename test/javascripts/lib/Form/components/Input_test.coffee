{ TestUtils } = React.addons

Input = require('react/lib/Form/components/Input')

describe 'Input', ->
  before ->
    @props =
      model: 'testModel'
      attribute: 'testAttribute'

  describe 'with minimal props', ->
    before ->
      @component = makeComponent(@props)

    it 'should output a default label', ->
      label = TestUtils.findRenderedDOMComponentWithTag @component, 'label'
      label.htmlFor.should.equal 'testModel[testAttribute]'

    it 'should output an input tag of default type text', ->
      input = TestUtils.findRenderedDOMComponentWithTag @component, 'input'
      input.type.should.equal 'text'
      input.name.should.equal 'testModel[testAttribute]'

    it 'wont output any errors', ->
      errors =
        TestUtils.scryRenderedDOMComponentsWithClass @component, errorClass
      errors.length.should.equal 0

  describe 'with a submodel', ->
    before ->
      @props.submodel = 'testSubmodel'
      @component = makeComponent(@props)

    it 'should output a label containing that submodel', ->
      label = TestUtils.findRenderedDOMComponentWithTag @component, 'label'
      label.htmlFor.should.equal 'testModel[testSubmodel][testAttribute]'

    it 'should output an input tag with that submodel', ->
      input = TestUtils.findRenderedDOMComponentWithTag @component, 'input'
      input.name.should.equal 'testModel[testSubmodel][testAttribute]'

  describe 'with a valid type', ->
    before ->
      @props.type = 'number'
      @component = makeComponent(@props)

    it 'should output an input tag with that type', ->
      input = TestUtils.findRenderedDOMComponentWithTag @component, 'input'
      input.type.should.equal 'number'

  describe 'with an invalid type', ->
    before ->
      @props.type = 'noValidType'
      @component = makeComponent(@props)

    it 'should output an input tag with type text', ->
      input = TestUtils.findRenderedDOMComponentWithTag @component, 'input'
      input.type.should.equal 'text'

  describe 'with errors', ->
    before ->
      @props.errors = ['foo', 'bar']
      @component = makeComponent(@props)

    it 'must output those errors', ->
      errors =
        TestUtils.scryRenderedDOMComponentsWithClass @component, errorClass
      errors.length.should.equal 1
      errors[0].innerText.should.equal 'foo, bar'

# utilities

makeComponent = (props) ->
  element = React.createElement(Input, props)
  TestUtils.renderIntoDocument element

errorClass = 'inline-errors'
