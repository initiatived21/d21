React = require('react')
TestUtils = require('react-addons-test-utils')
{ mount } = require('enzyme')

FilteredList = require('./FilteredList').default
PledgeBrick = require('./PledgeBrick').default

describe 'FilteredList', ->
  props =
    pledges: {}
    filter: 'testFilter'

  describe 'with basic props', ->

    it 'should output a div and no PledgeBricks', ->
      wrapper = mount(React.createElement(FilteredList, props))
      div = wrapper.find('div')
      div.length.should.equal 1
      div.node.className.should.equal 'o-layout FilteredList'

      bricks = wrapper.find(PledgeBrick)
      bricks.length.should.equal 0


  describe 'with pledges', ->
    pledgeProps = null
    before ->
      pledgeProps = Object.assign {},
        pledges:
          1:
            id: 1
            aasm_state: 'active'
            content: 'test', amount: 10, who: 'test', requirement: 'test'
            deadline: '2000-01-01', signatures_count: 0
          2:
            id: 2
            aasm_state: 'successful'
            content: 'test', amount: 10, who: 'test', requirement: 'test'
            deadline: '2000-01-01', signatures_count: 0
          3:
            id: 3
            aasm_state: 'initialized'
            content: 'test', amount: 10, who: 'test', requirement: 'test'
            deadline: '2000-01-01', signatures_count: 0

    it 'should output PledgeBricks filtered by the successful filter', ->
      pledgeProps.filter = 'successful'
      wrapper = mount React.createElement(FilteredList, pledgeProps)
      bricks = wrapper.find PledgeBrick
      bricks.length.should.equal 1
      bricks.node.props.pledge.id.should.equal 2
      bricks.node.props.pledge.aasm_state.should.equal 'successful'

    it 'should output PledgeBricks filtered by the active filter', ->
      pledgeProps.filter = 'active'
      wrapper = mount React.createElement(FilteredList, pledgeProps)
      bricks = wrapper.find PledgeBrick
      bricks.length.should.equal 1
      bricks.node.props.pledge.id.should.equal 1
      bricks.node.props.pledge.aasm_state.should.equal 'active'
