import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import PledgeView from './PledgeView'

describe('<PledgeView />', function () {
  const props = {
    pledge: {
      id: 1,
      title: 'Dinge',
      content: 'Dinge zu tun',
      amount: 10,
      who: 'andere',
      requirement: 'anderes tun',
      location: 'Berlin',
      deadline: '2016-09-30',
      signatures_count: 5,
      created_at: '2016-09-01T12:45:22.964Z',
      aasm_state: 'active',
      locale: 'de',
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
    },

    forms: {
      signPledgeForm: {
        action: '/',
        authToken: 'a',
        model: 'signature',
        object: { object: { fields: {} } }
      },
      updateForm: {
        action: '/',
        authToken: 'a',
        model: 'update',
        object: { object: { fields: {} } }
      },
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
      },
    },

    user: {
      name: '',
      avatar: {
        url: ''
      }
    },

    signatures: [],
    comments: [],
    updates: [],
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeView {...props} />)

    wrapper.is(Provider).should.be.true
    wrapper.find('.o-wrapper').length.should.equal(1)
  })
})
