import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import PledgeQAs from './PledgeQAs';

describe('<PledgeQAs />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeQAs />);

    wrapper.find('dl').length.should.equal(1);
  });
});
