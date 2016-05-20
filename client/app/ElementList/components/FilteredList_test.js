import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';

import FilteredList from './FilteredList.jsx';
import PledgeTile   from '../../PledgeTile/components/PledgeTile';

describe('FilteredList', function() {
  const props = {
    pledges: {},
    filter: 'testFilter'
  };

  describe('with basic props', function() {
    it('should output a div and no PledgeTiles', function() {
      const wrapper = mount(React.createElement(FilteredList, props));

      const div = wrapper.find('div');
      div.length.should.equal(1);
      div.node.className.should.equal('o-layout FilteredList');

      const tile = wrapper.find(PledgeTile);
      tile.length.should.equal(0);
    });
  });

  describe('with pledges', function() {
    let pledgeProps = null;

    before(function() {
      pledgeProps = Object.assign({}, {
        pledges: {
          1: {
            id: 1,
            aasm_state: 'active',
            content: 'test',
            amount: 10,
            who: 'test',
            requirement: 'test',
            deadline: '2000-01-01',
            signatures_count: 0
          },

          2: {
            id: 2,
            aasm_state: 'successful',
            content: 'test',
            amount: 10,
            who: 'test',
            requirement: 'test',
            deadline: '2000-01-01',
            signatures_count: 0
          },

          3: {
            id: 3,
            aasm_state: 'initialized',
            content: 'test',
            amount: 10,
            who: 'test',
            requirement: 'test',
            deadline: '2000-01-01',
            signatures_count: 0
          }
        }
      });
    });

    it(
      'should output PledgeTiles filtered by the successful filter',
      function() {
        pledgeProps.filter = 'successful';
        const wrapper = mount(React.createElement(FilteredList, pledgeProps));

        const tiles = wrapper.find(PledgeTile);
        tiles.length.should.equal(1);
        tiles.node.props.pledge.id.should.equal(2);
        tiles.node.props.pledge.aasm_state.should.equal('successful');
      }
    );

    it('should output PledgeTiles filtered by the active filter', function() {
      pledgeProps.filter = 'active';
      const wrapper = mount(React.createElement(FilteredList, pledgeProps));

      const tiles = wrapper.find(PledgeTile);
      tiles.length.should.equal(1);
      tiles.node.props.pledge.id.should.equal(1);
      tiles.node.props.pledge.aasm_state.should.equal('active');
    });
  });
});
