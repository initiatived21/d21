import React           from 'react';
import { shallow }     from 'enzyme';
import Initiator from './Initiator';

describe('<Initiator />', function () {
  const props = {
    name: 'Max Mustermann'
  };

  it('should render', function () {
    const wrapper = shallow(<Initiator>Max Mustermann</Initiator>);

    wrapper.find('p').at(0).text().should.equal('Initiator');
    wrapper.find('p').at(1).text().should.equal('Max Mustermann');
  });
});
