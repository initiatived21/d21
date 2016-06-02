import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import PledgeView from './PledgeView';
import Pledge from './Pledge';

describe('<PledgeView />', function () {
  const props = {
    id: 1,
    content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
    amount: 10,
    who: 'Dolmetscher',
    requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
    location: 'Berlin',
    deadline: '2016-09-30',
    signatures_count: 5
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeView {...props} />);

    wrapper.is(Provider).should.be.true;
    wrapper.find('main').length.should.equal(1);
    wrapper.find(Pledge).length.should.equal(1);
  });
});
