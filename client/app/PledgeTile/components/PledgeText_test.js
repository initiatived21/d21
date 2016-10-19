import React       from 'react'
import { shallow } from 'enzyme'
import PledgeText  from './PledgeText'

describe('<PledgeText />', function () {
  const props = {
    content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
    amount: 10,
    who: 'Dolmetscher',
    requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
    locale: 'de',
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeText {...props} />)

    wrapper.hasClass('c-pledge-tile__text').should.be.true
    wrapper.find('q').length.should.equal(1)
  })
})
