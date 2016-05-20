import React              from 'react';
import { shallow }        from 'enzyme';
import { PledgeProgress } from './PledgeTile';

describe('<PledgeProgress />', function () {
  const props = {
    amount: 10,
    signatures_count: 5
  };

  it('should render its text', function () {
    const wrapper = shallow(<PledgeProgress {...props} />);

    wrapper.hasClass('c-pledge-tile__signees').should.be.true;
    wrapper.text().should.equal('5 von 10 Unterzeichnern');
  });
});
