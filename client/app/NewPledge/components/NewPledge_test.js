import React     from 'react'
import { mount } from 'enzyme'

import NewPledge from './NewPledge.jsx'

describe('<NewPledge />', function() {
  const formProps = {
    form: {
      action: '/de/pledges',
      authToken: 'QTYw0c+kpxTdZuEcmyaZx2iW0tJ0l7LPnL9miMZfzZlQ7N+xBG8Ik0EGbTWa6utl106vsQQcH9/6nncUoaRMrw==',
      method: 'POST',
      model: 'pledge',
      seedData: {
        errors: {

        },
        fields: {
          amount: null,
          content: null,
          deadline: null,
          description: null,
          image: null,
          initiator: null,
          location: null,
          requirement: null,
          tag_ids: [],
          title: null,
          who: null
        }
      }
    },

    tags: []
  }

  it('should have two submit buttons', function() {
    const wrapper = mount(<NewPledge {...formProps} />)

    const inputs = wrapper.find('button[type="submit"]')
    inputs.length.should.equal(2)
    inputs.first().node.type.should.equal('submit')
  })
})
