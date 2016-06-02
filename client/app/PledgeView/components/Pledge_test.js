import React       from 'react';
import { shallow } from 'enzyme';

import Pledge from './Pledge';
import TagList from './TagList';
import PledgeLocation from './PledgeLocation';

describe('<Pledge />', function () {
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
    const wrapper = shallow(<Pledge {...props} />);

    wrapper.find(TagList).length.should.equal(1);
    wrapper.find(PledgeLocation).length.should.equal(1);

  });
});
