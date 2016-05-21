import React             from 'react';
import { shallow }       from 'enzyme';
import PledgeSocialMedia from './PledgeSocialMedia';

describe('<PledgeSocialMedia />', function () {
  const props = {
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeSocialMedia {...props} />);
    const p = wrapper.find('p');

    p.length.should.equal(1);
    p.text().should.equal('Social Media Buttons');
  });
});
