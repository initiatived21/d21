import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';

import FilteredList from './FilteredList.jsx';
import PledgeBrick from './PledgeBrick.jsx';

describe('FilteredList', function() {
  const props = {
    pledges: {},
    filter: 'testFilter'
  };

  describe('with basic props', function() {
    it('should output a div and no PledgeBricks', function() {
      const wrapper = mount(React.createElement(FilteredList, props));

      const div = wrapper.find('div');
      div.length.should.equal(1);
      div.node.className.should.equal('o-layout FilteredList');

      const bricks = wrapper.find(PledgeBrick);
      bricks.length.should.equal(0);
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
      'should output PledgeBricks filtered by the successful filter',
      function() {
        pledgeProps.filter = 'successful';
        const wrapper = mount(React.createElement(FilteredList, pledgeProps));

        const bricks = wrapper.find(PledgeBrick);
        bricks.length.should.equal(1);
        bricks.node.props.pledge.id.should.equal(2);
        bricks.node.props.pledge.aasm_state.should.equal('successful');
      }
    );

    it('should output PledgeBricks filtered by the active filter', function() {
      pledgeProps.filter = 'active';
      const wrapper = mount(React.createElement(FilteredList, pledgeProps));

      const bricks = wrapper.find(PledgeBrick);
      bricks.length.should.equal(1);
      bricks.node.props.pledge.id.should.equal(1);
      bricks.node.props.pledge.aasm_state.should.equal('active');
    });
  });
});
