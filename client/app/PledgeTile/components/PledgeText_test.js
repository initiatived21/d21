import React from 'react';
import { shallow } from 'enzyme';

import { PledgeText } from './PledgeTile';

describe('<PledgeText />', function () {
  const props = {
    content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
    amount: 10,
    who: 'Dolmetscher',
    requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen'
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeText {...props} />);

    wrapper.hasClass('c-pledge-tile__text').should.be.true;
    wrapper.text().should.equal('Wir versprechen, Schulbücher im Wert von 2.500 Euro für den Einsatz '
      + 'in Willkommensklassen bereitzustellen, wenn mindestens 10 Dolmetscher bereit sind, '
      + 'im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen.');
  });
});
