import React       from 'react';
import { shallow } from 'enzyme';
import PledgeFeatures from './PledgeFeatures';

describe('<PledgeFeatures />', function () {
  const props = {
    deadline: '2016-09-30',
    amount: 10,
    signatures_count: 5
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeFeatures {...props} />);

  });
});
