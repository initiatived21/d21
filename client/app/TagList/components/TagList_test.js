import React         from 'react'
import { shallow }   from 'enzyme'
import Tag           from './Tag'
import TagList       from './TagList'

describe('<TagList />', function () {
  const props = {
    tags: [
      {
        id: 1,
        name: 'family',
        color: 'C32BAA'
      },
      {
        id: 2,
        name: 'books',
        color: 'FF11AA'
      },
      {
        id: 3,
        name: 'people',
        color: '333333'
      },
      {
        id: 4,
        name: 'technology',
        color: 'FFFFFF'
      },
      {
        id: 5,
        name: 'travel',
        color: '555555'
      },
    ]
  }

  it('should render', function () {
    const wrapper = shallow(<TagList {...props} />)

    wrapper.hasClass('c-tag-list').should.be.true
    wrapper.find(Tag).length.should.equal(5)
  })

  it('should render summarized version', function () {
    const wrapper = shallow(<TagList {...props} summary />)

    wrapper.hasClass('c-tag-list').should.be.true
    wrapper.hasClass('c-tag-list--summary').should.be.true
    wrapper.find(Tag).length.should.equal(3)
    wrapper.find('span').length.should.equal(1)
  })
})
