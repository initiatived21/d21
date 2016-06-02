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

    wrapper.html().should.equal('<div class="o-media"><img class="o-media__img" src="cornelsen.png" width="100" height="100" alt="Cornelsen Logo"/><figure class="o-media__body"><blockquote class="c-pledge__text">Wir versprechen, Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen, wenn mindestens 10 Dolmetscher bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen.</blockquote><figcaption>Cornelsen Verlag</figcaption></figure></div>');
  });
});
