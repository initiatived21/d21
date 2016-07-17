import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import PledgeView from './PledgeView'
import Pledge from './Pledge'
import PledgeSidebar from './PledgeSidebar'
import PledgeUpdatesContainer from '../containers/PledgeUpdatesContainer'
import PledgeQAsContainer from '../containers/PledgeQAsContainer'
import SigneeListContainer from '../containers/SigneeListContainer'

describe('<PledgeView />', function () {
  const props = {
    pledge: {
      id: 1,
      content: 'Dinge zu tun',
      amount: 10,
      who: 'andere',
      requirement: 'anderes tun',
      location: 'Berlin',
      deadline: '2016-09-30',
      signatures_count: 5,
      created_at: '2016-09-01T12:45:22.964Z'
    },

    signPledgeForm: {
      formData: {
        action: '/',
        authToken: 'a',
        model: 'signature',
        object: { object: { fields: {} } }
      }
    },

    commentForms: {
      questionForm: {
        action: '/',
        authToken: 'a',
        model: 'comment',
        object: { object: { fields: {} } }
      },
      answerForm: {
        action: '/',
        authToken: 'a',
        model: 'comment',
        object: { object: { fields: {} } }
      }
    },

    questionForm: {
      formData: {
        action: '/',
        authToken: 'a',
        model: 'comment',
        object: { object: { fields: {} } }
      }
    },

    signatures: [],
    comments: [],
    updates: [],
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeView {...props} />)

    wrapper.is(Provider).should.be.true
    wrapper.find('main').length.should.equal(1)
    wrapper.find(Pledge).length.should.equal(1)
    wrapper.find(PledgeSidebar).length.should.equal(1)
    wrapper.find(PledgeUpdatesContainer).length.should.equal(1)
    wrapper.find(PledgeQAsContainer).length.should.equal(1)
    wrapper.find(SigneeListContainer).length.should.equal(1)
  })
})
