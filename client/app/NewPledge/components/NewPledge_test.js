import React     from 'react';
import { mount } from 'enzyme';

import NewPledge from './NewPledge.jsx';

describe('NewPledge', function() {
  const formProps = {
    onSubmit: function() {},

    formData: {
      action: '/',
      authToken: 'a',
      model: 'pledge',
      object: {
        fields: {
          content:     null,
          amount:      null,
          who:         null,
          requirement: null,
          location:    null,
          deadline:    null,
          description: null,
          tag_ids:     [],
          initiator: {
            fields: {
              name:         null,
              organization: null,
              avatar:       null,
              email:        null,
              password:     null
            }
          }
        }
      }
    },

    tags: []
  };

  it('should have a submit button', function() {
    const wrapper = mount(<NewPledge {...formProps} />);

    const inputs = wrapper.find('button');
    inputs.length.should.equal(2);
    inputs.last().text().should.include('submit');
  });
});
