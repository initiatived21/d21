import React               from 'react';
import { shallow }         from 'enzyme';

import PledgeTileFront     from './PledgeTileFront';
import TagList             from '../../TagList/components/TagList';
import InitiatorWithImage  from '../../PledgeData/components/InitiatorWithImage';
import PledgeState         from '../../PledgeData/components/PledgeState';
import ProgressBar         from '../../PledgeData/components/ProgressBar';

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
    wrapper.find(TagList).length.should.equal(1);
    wrapper.find(InitiatorWithImage).length.should.equal(1);
    wrapper.find(PledgeState).length.should.equal(1);
    wrapper.find(ProgressBar).length.should.equal(1);
  });
});