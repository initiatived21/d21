import React       from 'react';
import { shallow } from 'enzyme';
import SocialMediaButtons from './SocialMediaButtons';

describe('<SocialMediaButtons />', function () {
  it('should render', function () {
    const wrapper = shallow(<SocialMediaButtons />);

    wrapper.text().should.equal('social media buttons');
  });
});
