import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import PledgeView from './PledgeView';
import Pledge from './Pledge';

describe('<PledgeView />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeView />);

    wrapper.is(Provider).should.be.true;
    wrapper.find('main').length.should.equal(1);
    wrapper.find(Pledge).length.should.equal(1);
  });
});
