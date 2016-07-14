import React               from 'react';
import { shallow }         from 'enzyme';

import PledgeTileFront     from './PledgeTileFront';
import PledgeTagList       from './PledgeTagList';
import PledgeInitiator     from './PledgeInitiator';
import PledgeDaysRemaining from './PledgeDaysRemaining';
import PledgeProgress      from './PledgeProgress';

describe('<PledgeTileFront />', function () {
  const props = {
    title: 'Schulbücher für Willkommensklassen',
    deadline: '2016-09-30',
    signatures_total: 10,
    signatures_count: 5,
    path: 'http://www.example.com/pledges/1'
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeTileFront {...props} />);

    wrapper.hasClass('c-pledge-tile__front').should.be.true;
    wrapper.find('a').length.should.equal(1);
    wrapper.find(PledgeTagList).length.should.equal(1);
    wrapper.find(PledgeInitiator).length.should.equal(1);
    wrapper.find(PledgeProgress).length.should.equal(1);
  });
});
