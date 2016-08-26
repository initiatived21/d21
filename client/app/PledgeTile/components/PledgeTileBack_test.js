import React               from 'react'
import { shallow }         from 'enzyme'

import PledgeTileBack      from './PledgeTileBack'
import PledgeText          from './PledgeText'
import SocialMediaButtons  from '../../SocialMediaButtons/components/SocialMediaButtons'

describe('<PledgeTileBack />', function () {
  const props = {
    initiatorName: 'Max Mustermann',
    content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
    amount: 10,
    who: 'Dolmetscher',
    requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
    path: 'http://www.example.com/pledges/1'
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeTileBack {...props} />)

    wrapper.hasClass('c-pledge-tile').should.be.true
    wrapper.find(PledgeText).length.should.equal(1)
    wrapper.find(SocialMediaButtons).length.should.equal(1)
  })

  it('should "pass through" its className prop', function() {
    const wrapper = shallow(<PledgeTileBack {...props} className="dummy" />)

    wrapper.hasClass('dummy').should.be.true
  })
})
