import React       from 'react'
import { shallow } from 'enzyme'

import Pledge from './Pledge'
import TagList from '../../TagList/components/TagList'
import PledgeLocation from './PledgeLocation'
import PledgeQuote from './PledgeQuote'
import PledgeData from './PledgeData'
import SocialMediaButtons from '../../SocialMediaButtons/components/SocialMediaButtons'
import PledgeImage from './PledgeImage'
import PledgeDescription from './PledgeDescription'
import PledgeCreatedAt from './PledgeCreatedAt'

describe('<Pledge />', function () {
  const props = {
    id: 1,
    title: 'Bücher für Schulklassen',
    content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
    amount: 10,
    who: 'Dolmetscher',
    requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
    location: 'Berlin',
    deadline: '2016-09-30',
    image: {
      url: 'dummy'
    },
    signatures_count: 5,
    created_at: '2016-09-01T12:45:22.964Z',
    user: {
      name: '',
      avatar: {
        url: ''
      }
    }
  }

  it('should render', function () {
    const wrapper = shallow(<Pledge {...props} />)

    wrapper.find(TagList).length.should.equal(1)
    //wrapper.find(PledgeLocation).length.should.equal(1);
    wrapper.find(PledgeQuote).length.should.equal(1)
    wrapper.find(PledgeData).length.should.equal(1)
    wrapper.find(SocialMediaButtons).length.should.equal(1)
    wrapper.find(PledgeImage).length.should.equal(1)
    wrapper.find(PledgeDescription).length.should.equal(1)
    wrapper.find(PledgeCreatedAt).length.should.equal(1)
  })
})
