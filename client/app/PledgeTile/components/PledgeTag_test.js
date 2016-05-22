import React       from 'react';
import { shallow } from 'enzyme';
import PledgeTag   from './PledgeTag';

describe('<PledgeTag />', function () {
  const props = {
    name: 'Familie'
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeTag {...props} />);

    wrapper.hasClass('c-tag-list__item').should.be.true;
    wrapper.text().should.equal('Familie');
  });
});
