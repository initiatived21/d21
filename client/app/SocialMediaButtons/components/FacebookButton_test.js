import React       from 'react';
import { shallow } from 'enzyme';

import FacebookButton from './FacebookButton';

describe('<FacebookButton />', function () {
  const props = {
    url: 'http://www.example.com',
    handleClick: () => null
  };

  it('should render', function () {
    const wrapper = shallow(<FacebookButton {...props} />);

    wrapper.find('li').length.should.equal(1);
    wrapper.find('a').length.should.equal(1);
    wrapper.find('svg').length.should.equal(1);
  });

  it('should link to the correct URL', function () {
    const wrapper = shallow(<FacebookButton {...props} />);

    const href = wrapper.find('a').at(0).props().href;
    href.should.equal('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.example.com');
  });
});
