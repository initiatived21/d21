import React from 'react'
import I18n from 'i18n-js'
import { shallow } from 'enzyme'

import Signee from './Signee'

describe('<Signee />', function () {
  const props = {
    id: 53,
    name: 'Max Mustermann',
    email: 'max@example.com',
    img_src: '/images/max_mustermann.jpg',
    comment: 'Tolle Initiative!',
    created_at: '2016-09-01T12:05:22.964Z'
  }

  it('should render', function () {
    I18n.locale = 'de'

    const wrapper = shallow(<Signee {...props} />)

    wrapper.find('li').length.should.equal(1)
  })

  it('should not display the email normally', function() {
    const wrapper = shallow(<Signee {...props} />)

    wrapper.text().should.not.match(/max@example.com/)
  })

  it('should display the email if showPrivateData is set', function() {
    const wrapper = shallow(<Signee {...props} showPrivateData />)

    wrapper.text().should.match(/max@example.com/)
  })

  it('should not display the name if anonymous is set', function() {
    const wrapper = shallow(<Signee {...props} anonymous />)

    wrapper.text().should.not.match(/Max Mustermann/)
  })

  it('should display the organization if it is set', function() {
    const wrapper = shallow(<Signee {...props} organization="Lenovo" />)

    wrapper.text().should.match(/Lenovo/)
  })

  it('should not display the organization if anonymous is set', function() {
    const wrapper = shallow(<Signee {...props} anonymous organization="Lenovo" />)

    wrapper.text().should.not.match(/Lenovo/)
  })

  it('should display its id or index', function() {
    const wrapper = shallow(<Signee {...props} />)

    wrapper.text().should.match(/53/)
  })

  it('should display name if anonymous and if showPrivateData is set', function() {
    const wrapper = shallow(<Signee {...props} anonymous showPrivateData />)

    wrapper.text().should.match(/Max Mustermann/)
  })
})
