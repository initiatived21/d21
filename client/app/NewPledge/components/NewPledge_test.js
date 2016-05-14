import React     from 'react';
import { mount } from 'enzyme';

import NewPledge from './NewPledge.jsx';

describe('NewPledge', function() {
  const formProps = {
    onSubmit: function() {},

    formData: {
      action: '/',
      authToken: 'a',
      model: 'pledge'
    }
  };

  it('should have a submit button', function() {
    const wrapper = mount(React.createElement(NewPledge, formProps));

    const inputs = wrapper.find('button');
    inputs.length.should.equal(2);
    inputs.last().text().should.include('submit');
  });
});
