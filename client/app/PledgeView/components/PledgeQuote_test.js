import React       from 'react';
import { shallow } from 'enzyme';
import PledgeQuote from './PledgeQuote';

describe('<PledgeQuote />', function () {
  const props = {
    content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
    amount: 10,
    who: 'Dolmetscher',
    requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeQuote {...props} />);

    wrapper.find('img').length.should.equal(1);
    wrapper.find('div').length.should.equal(2);
    wrapper.find('blockquote').length.should.equal(1);
  });
});
