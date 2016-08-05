import React       from 'react'
import { shallow } from 'enzyme'
import Tag from './Tag'

describe('<Tag />', function () {
  it('should render', function () {
    const wrapper = shallow(<Tag>Familie</Tag>)

    wrapper.hasClass('c-tag-list__item').should.be.true
    wrapper.text().should.equal('Familie')
  })
})
