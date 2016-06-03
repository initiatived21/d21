import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import PledgeUpdates from './PledgeUpdates';

describe('<PledgeUpdates />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeUpdates />);

    wrapper.find('ol').length.should.equal(1);
  });
});
