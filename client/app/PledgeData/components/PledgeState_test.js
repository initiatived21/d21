import React       from 'react';
import { shallow } from 'enzyme';
import PledgeState from './PledgeState';

describe('<PledgeState />', function () {
  const props = {
    remainingDays: 3
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeState {...props} />);

    wrapper.find('p').at(0).text().should.equal('noch3Tage');
  });
});
