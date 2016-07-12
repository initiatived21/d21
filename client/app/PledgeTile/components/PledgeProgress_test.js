import React          from 'react';
import { shallow }    from 'enzyme';
import PledgeProgress from './PledgeProgress';

describe('<PledgeProgress />', function () {
  const props = {
    amount: 10,
    signaturesCount: 5,
    remainingDays: 3
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeProgress {...props} />);

    wrapper.hasClass('o-media').should.be.true;
    wrapper.find('p').at(0).text().should.equal('noch3Tage');
    wrapper.find('p').at(1).text().should.equal('5 von 10Unterzeichnern');
  });
});
