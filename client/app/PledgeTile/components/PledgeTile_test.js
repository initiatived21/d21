import React               from 'react';
import { shallow }         from 'enzyme';

import PledgeTile          from './PledgeTile';
import PledgeTagList       from './PledgeTagList';
import PledgeText          from './PledgeText';
import PledgeInitiator     from './PledgeInitiator';
import PledgeDaysRemaining from './PledgeDaysRemaining';
import PledgeProgress      from './PledgeProgress';
import SocialMediaButtons  from '../../SocialMediaButtons/components/SocialMediaButtons';

describe('<PledgeTile />', function () {
  const props = {
    pledge: {
      id: 1,
      content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
      amount: 10,
      who: 'Dolmetscher',
      requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
      deadline: '2016-09-30',
      signatures_count: 5,
      aasm_state: 'successful'
    }
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeTile {...props} />);

    wrapper.hasClass('o-layout__item').should.be.true;
    wrapper.find('article').hasClass('c-pledge-tile').should.be.true;
    wrapper.find('a').length.should.equal(1);
    wrapper.find(PledgeTagList).length.should.equal(1);
    wrapper.find(PledgeInitiator).length.should.equal(1);
    wrapper.find(PledgeText).length.should.equal(1);
    wrapper.find(PledgeDaysRemaining).length.should.equal(1);
    wrapper.find(PledgeProgress).length.should.equal(1);
    wrapper.find(SocialMediaButtons).length.should.equal(1);
  });
});
