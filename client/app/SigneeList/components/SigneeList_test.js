import React from 'react'
import { shallow } from 'enzyme'
import SigneeList from './SigneeList'

describe('<SigneeList />', function () {
  const props = {
    pledge_id: 1,
    signatures: [
      {
        id: 1,
        name: 'Max Mustermann',
        img_src: '/images/max_mustermann.jpg',
        comment: 'Tolle Initiative!',
        created_at: '2016-09-01T12:05:22.964Z'
      },
      {
        id: 2,
        name: 'Jana Mustermann',
        img_src: '/images/jana_mustermann.jpg',
        comment: 'Nicht schlecht!',
        created_at: '2016-10-02T13:06:21.222Z'
      }
    ]
  }

  it('should render', function () {
    const wrapper = shallow(<SigneeList {...props} />)

    wrapper.find('ol').length.should.equal(1)
  })

  it('should render a text if signee list is empty', function () {
    const wrapper = shallow(<SigneeList pledge_id={1} signatures={[]} />)

    wrapper.find('p').length.should.equal(1)
  })
})
