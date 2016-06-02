import React       from 'react';
import { shallow } from 'enzyme';
import Tag   from './Tag';

describe('<Tag />', function () {
  const props = {
    name: 'Familie'
  };

  it('should render', function () {
    const wrapper = shallow(<Tag {...props} />);

    wrapper.hasClass('c-tag-list__item').should.be.true;
    wrapper.text().should.equal('Familie');
  });
});
