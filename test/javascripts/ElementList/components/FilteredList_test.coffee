{ TestUtils } = React.addons

FilteredList = require('react/ElementList/components/FilteredList')
PledgeBrick = require('react/ElementList/components/PledgeBrick')

makeComponent = (props, children = []) ->
  element = React.createElement(FilteredList, props, children)
  TestUtils.renderIntoDocument element

describe 'FilteredList', ->
  props =
    pledges: {}
    filter: 'testFilter'

  describe 'with basic props', ->
    basicComponent = makeComponent(props)

    it 'should output a div and no PledgeBricks', ->
      div = TestUtils.findRenderedDOMComponentWithTag basicComponent, 'div'
      div.className.should.equal 'FilteredList'

      bricks = TestUtils.scryRenderedComponentsWithType basicComponent,
                                                        PledgeBrick
      bricks.length.should.equal 0


  describe 'with pledges', ->
    before ->
      props.pledges = {
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
      }

    it 'should output PledgeBricks filtered by the successful filter', ->
      props.filter = 'successful'
      component = makeComponent(props)
      bricks = TestUtils.scryRenderedComponentsWithType component, PledgeBrick
      bricks.length.should.equal 1
      bricks[0].props.pledge.id.should.equal 2
      bricks[0].props.pledge.aasm_state.should.equal 'successful'

    it 'should output PledgeBricks filtered by the active filter', ->
      props.filter = 'active'
      component = makeComponent(props)
      bricks = TestUtils.scryRenderedComponentsWithType component, PledgeBrick
      bricks.length.should.equal 1
      bricks[0].props.pledge.id.should.equal 1
      bricks[0].props.pledge.aasm_state.should.equal 'active'
