import React              from 'react';
import { shallow }        from 'enzyme';
import { PledgeInitiator } from './PledgeTile';

describe('<PledgeInitiator />', function () {
  const props = {
    name: 'Max Mustermann'
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeInitiator {...props} />);

    wrapper.hasClass('o-media').should.be.true;
    wrapper.find('p').at(0).text().should.equal('Initiator');
    wrapper.find('p').at(1).text().should.equal('Max Mustermann');
  });
});
