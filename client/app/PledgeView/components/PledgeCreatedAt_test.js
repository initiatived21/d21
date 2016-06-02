import React       from 'react';
import { shallow } from 'enzyme';
import PledgeCreatedAt from './PledgeCreatedAt';

describe('<PledgeCreatedAt />', function () {
  it('should render', function () {
    const wrapper = shallow(
      <PledgeCreatedAt>2016-09-01T12:45:22.964Z</PledgeCreatedAt>
    );

    wrapper.hasClass('c-pledge__created-at').should.be.true;
  });
});
