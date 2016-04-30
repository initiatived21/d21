{ TestUtils } = React.addons

BaseForm = require('react/lib/Form/components/BaseForm')
Input = require('react/lib/Form/components/Input')

makeComponent = (props, children = []) ->
  element = React.createElement(BaseForm, props, children)
  TestUtils.renderIntoDocument element

describe 'BaseForm', ->
  props =
    onSubmit: ->
    formData:
      action: 'testAction'
      authToken: 'testAuthToken'
      model: 'testModel'

  describe 'with basic props', ->
    basicComponent = makeComponent(props)

    it 'should output a form tag', ->
      form = TestUtils.findRenderedDOMComponentWithTag basicComponent, 'form'
      form.action.should.include 'testAction'
      form.method.toUpperCase().should.equal 'POST'

    it 'should output two hidden input tags for token and utf8', ->
      inputs =
        TestUtils.scryRenderedDOMComponentsWithTag basicComponent, 'input'
      inputs.length.should.equal 2
      inputs[0].type.should.equal 'hidden'
      inputs[0].name.should.equal 'authenticity_token'
      inputs[0].value.should.equal 'testAuthToken'
      inputs[1].type.should.equal 'hidden'
      inputs[1].name.should.equal 'utf8'

  describe 'with submit spy', ->
    it 'should have an onSubmit function', ->
      props.onSubmit = sinon.spy()
      component = makeComponent(props)
      form = TestUtils.findRenderedDOMComponentWithTag component, 'form'
      TestUtils.Simulate.submit(form)
      props.onSubmit.called.should.equal true

  describe 'with non-Input children', ->
    children = [
      React.DOM.div({className: 'testDiv', key: 'a'}, [
        React.DOM.span(className: 'testSpan', key: 'b')])]

    it 'should render the children without model prop', ->
      component = makeComponent(props, children)
      div = TestUtils.findRenderedDOMComponentWithClass component, 'testDiv'
      span = TestUtils.findRenderedDOMComponentWithClass component, 'testSpan'
      should.not.exist div.model
      should.not.exist span.model

  describe 'with Input children', ->
    inputChildren = [
      React.DOM.div(
        key: '1'
        React.createElement Input,
          attribute: 'nestedTestInput'
          key: '2'
      )
      React.createElement Input,
        attribute: 'testInput'
        key: '3'
    ]

    it 'should render the children with the model prop', ->
      component = makeComponent(props, inputChildren)
      inputs =
        TestUtils.scryRenderedComponentsWithType component, Input
      inputs.length.should.equal 2
      inputs[0].props.model.should.equal 'testModel'
      inputs[1].props.model.should.equal 'testModel'

    describe 'without errors', ->
      it 'should render the children without the error prop', ->
        component = makeComponent(props, inputChildren)
        inputs =
          TestUtils.scryRenderedComponentsWithType component, Input
        inputs.length.should.equal 2
        should.not.exist inputs[0].props.errors
        should.not.exist inputs[1].props.errors


    describe 'with errors', ->
      before ->
        props.formData.errors =
          testInput: ['foo', 'baz']
          nestedTestInput: ['fuz']

      it 'should render the children with the error prop', ->
        component = makeComponent(props, inputChildren)
        inputs =
          TestUtils.scryRenderedComponentsWithType component, Input
        inputs.length.should.equal 2
        inputs[0].props.errors.should.deep.equal ['fuz']
        inputs[1].props.errors.should.deep.equal ['foo', 'baz']
