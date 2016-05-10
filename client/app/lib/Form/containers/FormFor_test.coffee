React = require('react')
# TestUtils = require('react-addons-test-utils')
sinon = require('sinon')
{ mount } = require('enzyme')
merge = require('lodash/merge')
assert = require('chai').assert

store = require('../../store').default
FormFor = require('./FormFor').default
Input = require('./Input').default

describe 'FormFor', ->
  props =
    store: store
    onSubmit: ->
    formData:
      action: 'testAction'
      authToken: 'testAuthToken'
      model: 'testModel'

  describe 'with basic props', ->

    it 'should output a form tag', ->
      wrapper = mount React.createElement(FormFor, props)
      form = wrapper.find('form')
      form.length.should.equal 1
      form.node.action.should.include 'testAction'
      form.node.method.toUpperCase().should.equal 'POST'

    it 'should output two hidden input tags for token and utf8', ->
      wrapper = mount React.createElement(FormFor, props)
      inputs = wrapper.find('input')
      inputs.length.should.equal 2
      inputs.first().node.type.should.equal 'hidden'
      inputs.first().node.name.should.equal 'authenticity_token'
      inputs.first().node.value.should.equal 'testAuthToken'
      inputs.last().node.type.should.equal 'hidden'
      inputs.last().node.name.should.equal 'utf8'

  describe 'with submit spy', ->
    it 'should have an onSubmit function', ->
      spyProps = Object.assign {}, props,
        onSubmit: sinon.spy()
      wrapper = mount React.createElement(FormFor, spyProps)
      form = wrapper.find('form').simulate('submit')
      spyProps.onSubmit.called.should.equal true

  describe 'with non-Input children', ->
    children = [
      React.DOM.div({className: 'testDiv', key: 'a'}, [
        React.DOM.span(className: 'testSpan', key: 'b')])]

    it 'should render the children without model prop', ->
      wrapper = mount React.createElement(FormFor, props, children)
      div = wrapper.find('.testDiv')
      span = wrapper.find('.testSpan')
      div.length.should.equal 1
      span.length.should.equal 1
      assert div.first().props().model is undefined

  describe 'with Input children', ->
    inputChildren = [
      React.DOM.div(
        key: '1'
        React.createElement Input,
          store: store
          attribute: 'nestedTestInput'
          key: '2'
      )
      React.createElement Input,
        store: store
        attribute: 'testInput'
        key: '3'
    ]

    it 'should render the children with the model prop', ->
      wrapper = mount React.createElement(FormFor, props, inputChildren)
      inputs = wrapper.find('Input')
      inputs.length.should.equal 2
      inputs.first().props().model.should.equal 'testModel'
      inputs.last().props().model.should.equal 'testModel'

    describe 'without errors', ->
      it 'should render the children without the error prop', ->
        wrapper = mount React.createElement(FormFor, props, inputChildren)
        inputs = wrapper.find('Input')
        inputs.length.should.equal 2
        assert inputs.first().props().errors is null
        assert inputs.last().props().errors is null


    describe 'with errors', ->
      it 'should render the children with the error prop', ->
        errorProps = merge {}, props,
          formData:
            errors:
              testInput: ['foo', 'baz']
              nestedTestInput: ['fuz']
        wrapper = mount React.createElement(FormFor, errorProps, inputChildren)
        inputs = wrapper.find('Input')
        inputs.length.should.equal 2
        inputs.first().props().serverErrors.should.deep.equal ['fuz']
        inputs.last().props().serverErrors.should.deep.equal ['foo', 'baz']
