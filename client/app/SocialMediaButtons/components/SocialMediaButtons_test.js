import React       from 'react';
import { mount } from 'enzyme';

import SocialMediaButtons from './SocialMediaButtons';
import FacebookButton from './FacebookButton';
import TwitterButton from './TwitterButton';
import GoogleplusButton from './GoogleplusButton';
import LinkedinButton from './LinkedinButton';
import XingButton from './XingButton';

describe('<SocialMediaButtons />', function () {
  const props = {
    url: 'http://www.example.com'
  };

  it('should render', function () {
    const wrapper = mount(<SocialMediaButtons {...props} />);

    wrapper.find('ul').length.should.equal(1);
    wrapper.find(FacebookButton).length.should.equal(1);
    wrapper.find(TwitterButton).length.should.equal(1);
    wrapper.find(GoogleplusButton).length.should.equal(1);
    wrapper.find(LinkedinButton).length.should.equal(1);
    wrapper.find(XingButton).length.should.equal(1);
  });

  it('should provide clickable buttons');
});
