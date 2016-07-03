import React      from 'react'
import sinon      from 'sinon'
import { mount }  from 'enzyme'
import { merge }  from 'lodash'
import { assert } from 'chai'

import store      from '../../store.js'
import FormFor    from './FormFor.js'
import Input      from './Input.js'
import JayForm    from '../../form_objects/jayform'

class TestFormObject extends JayForm {
  static get properties() {
    return ['testInput', 'nestedTestInput']
  }
}

describe('FormFor', function() {
  const props = {
    store: store,
    onSubmit: function() {},

    formData: {
      action: 'testAction',
      authToken: 'testAuthToken',
      model: 'testModel',
      errors: null,
      object: {
        fields: {
          testInput: null,
          nestedTestInput: null
        },
      },
    },
    object: TestFormObject,
  }

  describe('with basic props', function() {
    it('should output a form tag', function() {
      const wrapper = mount(React.createElement(FormFor, props))

      const form = wrapper.find('form')
      form.length.should.equal(1)
      form.node.action.should.include('testAction')
      form.node.method.toUpperCase().should.equal('POST')
    })

    it('should output two hidden input tags for token and utf8', function() {
      const wrapper = mount(React.createElement(FormFor, props))

      const inputs = wrapper.find('input')
      inputs.length.should.equal(2)
      inputs.first().node.type.should.equal('hidden')
      inputs.first().node.name.should.equal('authenticity_token')
      inputs.first().node.value.should.equal('testAuthToken')
      inputs.last().node.type.should.equal('hidden')
      inputs.last().node.name.should.equal('utf8')
    })
  })

  describe('with non-Input children', function() {
    const children = [
      React.DOM.div({
        className: 'testDiv',
        key: 'a'
      },
      [
        React.DOM.span({
          className: 'testSpan',
          key: 'b'
        })
      ])
    ];

    it('should render the children without model prop', function() {
      const wrapper = mount(React.createElement(FormFor, props, children))

      const div = wrapper.find('.testDiv')
      const span = wrapper.find('.testSpan')
      div.length.should.equal(1)
      span.length.should.equal(1)
      assert.isUndefined(div.first().props().model)
    })
  })

  describe('with Input children', function() {
    const inputChildren = [
      React.DOM.div(
        {key: '1'},
        React.createElement(Input, {
          store: store,
          attribute: 'nestedTestInput',
          key: '2'
        })
      ),
      React.createElement(Input, {
        store: store,
        attribute: 'testInput',
        key: '3'
      })
    ]

    it('should render the children with the model prop', function() {
      const wrapper = mount(React.createElement(FormFor, props, inputChildren))

      const inputs = wrapper.find('Input')
      inputs.length.should.equal(2)
      inputs.first().props().model.should.equal('testModel')
      inputs.last().props().model.should.equal('testModel')
    })

    describe('without errors', function() {
      it('should render the children without the error prop', function() {
        const wrapper = mount(React.createElement(FormFor, props, inputChildren))

        const inputs = wrapper.find('Input')
        inputs.length.should.equal(2)

        assert(inputs.first().props().errors, null)
        assert(inputs.last().props().errors, null)
      })
    })

    describe('with errors', function() {
      it('should render the children with the error prop', function() {
        const errorProps = merge({}, props, {
          formData: {
            object: {
              errors: {
                errors: {
                  testInput: ['foo', 'baz'],
                  nestedTestInput: ['fuz']
                }
              }
            }
          }
        })
        const wrapper = mount(React.createElement(FormFor, errorProps, inputChildren))

        const inputs = wrapper.find('Input')
        inputs.length.should.equal(2)
        inputs.first().props().serverErrors.should.deep.equal(['fuz'])
        inputs.last().props().serverErrors.should.deep.equal(['foo', 'baz'])
      })
    })
  })
})
