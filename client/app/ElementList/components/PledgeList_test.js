import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

import PledgeList from './PledgeList';
import PledgeTile from '../../PledgeTile/components/PledgeTile';

describe('<PledgeList />', function() {
  describe('with basic props', function() {
    const props = {
      pledges: []
    };

    it('should output a ul and no PledgeTiles', function() {
      const wrapper = shallow(
        <PledgeList {...props} />
      );

      const ul = wrapper.find('ul');
      ul.length.should.equal(1);
      ul.props().className.should.equal('o-layout');

      const tile = wrapper.find(PledgeTile);
      tile.length.should.equal(0);
    });
  });

  describe('with pledges', function() {
    const props = {
      pledges: [
        {
          id: 1,
          aasm_state: 'active',
          content: 'test',
          amount: 10,
          who: 'test',
          requirement: 'test',
          deadline: '2000-01-01',
          signatures_count: 0
        },

        {
          id: 2,
          aasm_state: 'successful',
          content: 'test',
          amount: 10,
          who: 'test',
          requirement: 'test',
          deadline: '2000-01-01',
          signatures_count: 0
        },

        {
          id: 3,
          aasm_state: 'initialized',
          content: 'test',
          amount: 10,
          who: 'test',
          requirement: 'test',
          deadline: '2000-01-01',
          signatures_count: 0
        }
      ]
    };

    it('should output PledgeTiles', function() {
        const wrapper = shallow(
          <PledgeList {...props} />
        );

        const tiles = wrapper.find(PledgeTile);
        tiles.length.should.equal(3);
      }
    );
  });
});
