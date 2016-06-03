import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import PledgeUpdate from './PledgeUpdate';

describe('<PledgeUpdate />', function () {
  const props = {
    children: 'Die Laptops sind auf dem Weg.',
    created_at: '2016-09-01T12:05:22.964Z'
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeUpdate {...props} />);

    wrapper.find('li').length.should.equal(1);
  });
});
