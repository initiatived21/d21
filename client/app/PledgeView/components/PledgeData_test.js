import React       from 'react'
import { shallow } from 'enzyme'
import PledgeData from './PledgeData'
import I18n from 'i18n-js'

describe('<PledgeData />', function () {
  const props = {
    state: 'active',
    initiator: 'Max Mustermann',
    deadline: '2016-08-06T14:36:05.947Z',
    amount: 10,
    signatures_count: 5
  }

  it('should render', function () {
    I18n.locale = 'de'
    const wrapper = shallow(<PledgeData {...props} />)
  })
})
