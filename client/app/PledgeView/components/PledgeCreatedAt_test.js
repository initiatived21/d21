import React       from 'react'
import { shallow } from 'enzyme'
import PledgeCreatedAt from './PledgeCreatedAt'
import I18n from 'i18n-js'

describe('<PledgeCreatedAt />', function () {
  it('should render', function () {
    I18n.locale = 'de'

    const wrapper = shallow(
      <PledgeCreatedAt>2016-09-01T12:05:22.964Z</PledgeCreatedAt>
    )

    wrapper.find('p').length.should.equal(1)
  })
})
