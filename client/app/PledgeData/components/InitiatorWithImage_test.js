import React           from 'react';
import { shallow }     from 'enzyme';
import InitiatorWithImage from './InitiatorWithImage';

describe('<InitiatorWithImage />', function () {
  const props = {
    imageUrl: 'dummy'
  };

  it('should render', function () {
    const wrapper = shallow(<InitiatorWithImage {...props}>Max Mustermann</InitiatorWithImage>);

    wrapper.hasClass('o-media').should.be.true;
    wrapper.find('p').at(0).text().should.equal('Initiator');
    wrapper.find('p').at(1).text().should.equal('Max Mustermann');
  });
});
