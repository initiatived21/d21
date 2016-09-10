import React       from 'react'
import sinon       from 'sinon'
import { mount }   from 'enzyme'

import ElementList from './ElementList.jsx'
import store       from '../../lib/store.js'

describe('ElementList', function() {
  describe('with basic props', function() {
    it('should output a PledgeList', function() {
      store.dispatch = sinon.stub()

      const component = mount(React.createElement(ElementList, {
        pledges: [],
        filter: 'testFilter'
      }))

      const container = component.find('Connect')

      container.length.should.equal(1)
      container.node.renderedElement.type.name.should.equal('PledgeList')
      container.node.props.filter.should.equal('testFilter')
    })
  })

  describe('with pledges', function() {
    it('should dispatch an addEntities with normalized pledges', function() {
      store.dispatch = sinon.spy()

      mount(React.createElement(ElementList, {
        pledges: [{
          id: 1,
          title: 'testTitle',
          content: 'testContent',
          amount: 1
        }],

        filter: 'testFilter'
      }))

      store.dispatch.called.should.equal(true)
    })
  })
})
