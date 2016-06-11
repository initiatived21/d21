import React       from 'react';
import { shallow } from 'enzyme';
import SocialMediaButtons from './SocialMediaButtons';

describe('<SocialMediaButtons />', function () {
  it('should render', function () {
    const wrapper = shallow(<SocialMediaButtons />);

    wrapper.hasClass('c-social-media-buttons').should.be.true;
    wrapper.hasClass('shariff').should.be.true;
  });
});
