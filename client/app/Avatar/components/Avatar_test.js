import React from 'react'
import { mount, shallow } from 'enzyme'

import Avatar from './Avatar'

describe('<Avatar />', function () {
  const props = {
    name: 'Max Mustermann',
    imagePath: '/uploads/image.jpg'
  }

  it('should render an image if path is provided', function () {
    const wrapper = mount(<Avatar {...props} />)
    const img = wrapper.find('img')

    img.length.should.equal(1)
    img.node.alt.should.match(/Max Mustermann/)
  })

  it('should render an SVG if image path is not provided', function () {
    const wrapper = mount(<Avatar {...props} imagePath={null} />)
    const svg = wrapper.find('svg')

    svg.length.should.equal(1)
    svg.find('title').text().should.match(/Max Mustermann/)
  })

  it('should "pass through" its className prop', function() {
    const wrapper = shallow(<Avatar className="dummy" {...props} />)

    const img = wrapper.find('img')

    img.hasClass('dummy').should.be.true
    img.hasClass('c-avatar').should.be.true
  })
})