React = require('react')
TestUtils = require('react-addons-test-utils')
merge = require('lodash/merge')
{ mount } = require('enzyme')

InputComponent = require('./InputComponent').default

describe 'InputComponent', ->
  defaultProps =
    model: 'testModel'
    attribute: 'testAttribute'

  describe 'with minimal props', ->

    it 'should output a default label', ->
      wrapper = mount React.createElement(InputComponent, defaultProps)
      label = wrapper.find('label')
      label.length.should.equal 1
      label.node.htmlFor.should.equal 'testModel[testAttribute]'

    it 'should output an input tag of default type text', ->
      wrapper = mount React.createElement(InputComponent, defaultProps)
      input = wrapper.find('input')
      input.length.should.equal 1
      input.node.type.should.equal 'text'
      input.node.name.should.equal 'testModel[testAttribute]'

    it 'wont output any errors', ->
      wrapper = mount React.createElement(InputComponent, defaultProps)
      errors = wrapper.find(".#{errorClass}")
      errors.length.should.equal 0

  describe 'with a submodel', ->
    submodelProps = merge {}, defaultProps,
        submodel: 'testSubmodel'

    it 'should output a label containing that submodel', ->
      wrapper = mount React.createElement(InputComponent, submodelProps)
      label = wrapper.find('label')
      label.node.htmlFor.should.equal 'testModel[testSubmodel][testAttribute]'

    it 'should output an input tag with that submodel', ->
      wrapper = mount React.createElement(InputComponent, submodelProps)
      input = wrapper.find('input')
      input.node.name.should.equal 'testModel[testSubmodel][testAttribute]'

  describe 'with a valid type', ->
    validTypeProps = merge {}, defaultProps,
      type: 'number'

    it 'should output an input tag with that type', ->
      wrapper = mount React.createElement(InputComponent, validTypeProps)
      input = wrapper.find('input')
      input.node.type.should.equal 'number'

  # describe 'with an invalid type', ->
  #   invalidTypeProps = merge {}, defaultProps,
  #     type: 'noValidType'
  #
  #   it 'should output an input tag with type text', ->
  #     wrapper = mount React.createElement(InputComponent, invalidTypeProps)
  #     input = wrapper.find('input')
  #     input.node.type.should.equal 'text'

  describe 'with errors', ->
    errorProps = merge {}, defaultProps,
      errors: ['foo', 'bar']

    it 'must output those errors', ->
      wrapper = mount React.createElement(InputComponent, errorProps)
      errors = wrapper.find(".#{errorClass}")
      errors.length.should.equal 1
      errors.first().text().should.equal 'foo, bar'

  describe 'with a textarea type', ->
    areaProps = merge {}, defaultProps,
      type: 'textarea'

    it 'must output a non-standard input field', ->
      wrapper = mount React.createElement(InputComponent, areaProps)
      input = wrapper.find('input')
      input.length.should.equal 0
      area = wrapper.find 'textarea'
      area.length.should.equal 1
      area.node.name.should.equal 'testModel[testAttribute]'

# utilities

errorClass = 'inline-errors'
