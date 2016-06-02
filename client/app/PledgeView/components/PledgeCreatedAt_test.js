import React       from 'react';
import { shallow } from 'enzyme';
import PledgeCreatedAt from './PledgeCreatedAt';

describe('<PledgeCreatedAt />', function () {
  it('should render', function () {
    const wrapper = shallow(
      <PledgeCreatedAt>2016-09-01T12:05:22.964Z</PledgeCreatedAt>
    );

    wrapper.hasClass('c-pledge__created-at').should.be.true;
    wrapper.text().should.equal('Veröffentlicht am 01.09.2016 um 14:05 Uhr');
  });
});
