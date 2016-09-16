import React from 'react'
import { mount } from 'enzyme'

import NumberInputComponent from './NumberInputComponent'

describe('<NumberInputComponent />', function() {
  const defaultProps = {
    model: 'testModel',
    attribute: 'testAttribute',
    value: 1,
    defaultValue: 1,
    min: 1,
    max: 15,
    formId: 'test',
    onChange: () => null,
    onBlur: () => null,
    onIncrease: () => null,
    onDecrease: () => null
  }

  describe('with a className prop', function() {
    it('should render', function() {
      const wrapper = mount(<NumberInputComponent className="dummy" {...defaultProps} />)

      wrapper.find('input[type="number"]').length.should.equal(1)
    })

    it('should "pass through" its className prop', function() {
      const wrapper = mount(<NumberInputComponent className="dummy" {...defaultProps} />)

      const div = wrapper.find('div').first()
      div.hasClass('dummy').should.be.true
    })
  })
})
