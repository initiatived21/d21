React = require('react')
TestUtils = require('react-addons-test-utils')
sinon = require('sinon')
{ mount } = require('enzyme')

ElementList = require('./ElementList').default
store = require('../../lib/store').default

describe 'ElementList', ->

  describe 'with basic props', ->

    it 'should output a FilteredListContainer', ->
      component = mount(React.createElement(ElementList,
        pledges: []
        filter: 'testFilter'
      ))
      container = component.find('Connect')
      container.length.should.equal 1
      container.node.renderedElement.type.name.should.equal 'FilteredList'
      container.node.props.filter.should.equal 'testFilter'

  describe 'with pledges', ->
    it 'should dispatch an addEntities with normalized pledges', ->
      store.dispatch = sinon.spy()
      mount(React.createElement(ElementList,
        pledges: [
          id: 1
          content: 'testContent'
          amount: 1
        ]
        filter: 'testFilter'
      ))
      store.dispatch.called.should.equal true
