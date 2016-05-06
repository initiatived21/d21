{ TestUtils } = React.addons
merge = require('lodash/merge')

InputComponent = require('react/lib/Form/components/InputComponent')

describe 'InputComponent', ->
  component = null
  defaultProps =
    model: 'testModel'
    attribute: 'testAttribute'

  describe 'with minimal props', ->
    before ->
      props = merge {}, defaultProps
      component = makeComponent(props)

    it 'should output a default label', ->
      label = TestUtils.findRenderedDOMComponentWithTag component, 'label'
      label.htmlFor.should.equal 'testModel[testAttribute]'

    it 'should output an input tag of default type text', ->
      input = TestUtils.findRenderedDOMComponentWithTag component, 'input'
      input.type.should.equal 'text'
      input.name.should.equal 'testModel[testAttribute]'

    it 'wont output any errors', ->
      errors =
        TestUtils.scryRenderedDOMComponentsWithClass component, errorClass
      errors.length.should.equal 0

  describe 'with a submodel', ->
    before ->
      props = merge {}, defaultProps,
        submodel: 'testSubmodel'
      component = makeComponent(props)

    it 'should output a label containing that submodel', ->
      label = TestUtils.findRenderedDOMComponentWithTag component, 'label'
      label.htmlFor.should.equal 'testModel[testSubmodel][testAttribute]'

    it 'should output an input tag with that submodel', ->
      input = TestUtils.findRenderedDOMComponentWithTag component, 'input'
      input.name.should.equal 'testModel[testSubmodel][testAttribute]'

  describe 'with a valid type', ->
    before ->
      props = merge {}, defaultProps,
        type: 'number'
      component = makeComponent(props)

    it 'should output an input tag with that type', ->
      input = TestUtils.findRenderedDOMComponentWithTag component, 'input'
      input.type.should.equal 'number'

  describe 'with an invalid type', ->
    before ->
      props = merge {}, defaultProps,
        type: 'noValidType'
      component = makeComponent(props)

    it 'should output an input tag with type text', ->
      input = TestUtils.findRenderedDOMComponentWithTag component, 'input'
      input.type.should.equal 'text'

  describe 'with errors', ->
    before ->
      props = merge {}, defaultProps,
        errors: ['foo', 'bar']
      component = makeComponent(props)

    it 'must output those errors', ->
      errors =
        TestUtils.scryRenderedDOMComponentsWithClass component, errorClass
      errors.length.should.equal 1
      errors[0].innerText.should.equal 'foo, bar'

  describe 'with an as-property', ->
    before ->
      props = merge {}, defaultProps,
        as: 'textarea'
      component = makeComponent(props)

    it 'must output a non-standard input field', ->
      input = TestUtils.scryRenderedDOMComponentsWithTag component, 'input'
      input.length.should.equal 0
      area = TestUtils.findRenderedDOMComponentWithTag component, 'textarea'
      area.name.should.equal 'testModel[testAttribute]'

# utilities

makeComponent = (props) ->
  element = React.createElement(InputComponent, props)
  TestUtils.renderIntoDocument element

errorClass = 'inline-errors'
