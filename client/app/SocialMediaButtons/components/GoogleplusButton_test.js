import React       from 'react';
import { shallow } from 'enzyme';

import GoogleplusButton from './GoogleplusButton';

describe('<GoogleplusButton />', function () {
  const props = {
    url: 'http://www.example.com',
    handleClick: () => null
  };

  it('should render', function () {
    const wrapper = shallow(<GoogleplusButton {...props} />);

    wrapper.find('li').length.should.equal(1);
    wrapper.find('a').length.should.equal(1);
    wrapper.find('svg').length.should.equal(1);
  });

  it('should link to the correct URL', function () {
    const wrapper = shallow(<GoogleplusButton {...props} />);

    const href = wrapper.find('a').at(0).props().href;
    href.should.equal('https://plus.google.com/share?url=http%3A%2F%2Fwww.example.com');
  });
});
