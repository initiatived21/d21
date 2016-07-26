import React               from 'react';
import { shallow }         from 'enzyme';

import PledgeTile from './PledgeTile';
import PledgeTileFront from './PledgeTileFront';
import PledgeTileBack from './PledgeTileBack';

describe('<PledgeTile />', function () {
  const props = {
    pledge: {
      id: 1,
      content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in Willkommensklassen bereitzustellen',
      amount: 10,
      who: 'Dolmetscher',
      requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch auf arabisch zu übersetzen',
      deadline: '2016-09-30',
      signatures_count: 5,
      aasm_state: 'successful',
      initiator: {
        name: 'Max Mustermann',
        avatar: {
          avatar: {
            url: 'dummy'
          }
        }
      }
    }
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeTile {...props} />);

    wrapper.hasClass('o-layout__item').should.be.true;
    wrapper.find('article').hasClass('c-pledge-tile').should.be.true;
    wrapper.find(PledgeTileFront).length.should.equal(1);
    wrapper.find(PledgeTileBack).length.should.equal(1);
  });
});
