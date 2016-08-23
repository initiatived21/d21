import React               from 'react'
import { shallow }         from 'enzyme'

import PledgeTileFront     from './PledgeTileFront'
import TagList             from '../../TagList/components/TagList'
import InitiatorWithImage  from '../../PledgeData/components/InitiatorWithImage'
import PledgeState         from '../../PledgeData/components/PledgeState'
import ProgressBar         from '../../PledgeData/components/ProgressBar'

describe('<PledgeTileFront />', function () {
  const props = {
    state: 'active',
    initiatorName: 'Max Mustermann',
    title: 'Schulbücher für Willkommensklassen',
    deadline: '2016-09-30',
    signatures_total: 10,
    signatures_count: 5,
    path: 'http://www.example.com/pledges/1',
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
      }
    ]
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeTileFront {...props} />)

    wrapper.hasClass('c-pledge-tile').should.be.true
    wrapper.find('a').length.should.equal(1)
    wrapper.find(TagList).length.should.equal(1)
    wrapper.find(InitiatorWithImage).length.should.equal(1)
    wrapper.find(PledgeState).length.should.equal(1)
    wrapper.find(ProgressBar).length.should.equal(1)
  })
})
