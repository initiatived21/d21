import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import SigneeList from './SigneeList';

describe('<SigneeList />', function () {
  it('should render', function () {
    const wrapper = shallow(<SigneeList />);

    wrapper.find('ol').length.should.equal(1);
  });
});
