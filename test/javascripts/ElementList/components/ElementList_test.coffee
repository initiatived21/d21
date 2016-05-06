{ TestUtils } = React.addons

ElementList = require('react/ElementList/components/ElementList')
FilteredListContainer =
  require('react/ElementList/containers/FilteredListContainer')

makeComponent = (props, children = []) ->
  element = React.createElement(ElementList, props, children)
  TestUtils.renderIntoDocument element

describe 'ElementList', ->
  props =
    pledges: []
    filter: 'testFilter'

  describe 'with basic props', ->

    it 'should output a FilteredListContainer', ->
      render ElementList, props, [], (component) ->
        container = TestUtils.findRenderedComponentWithType component,
                                                          FilteredListContainer
        container.props.filter.should.equal 'testFilter'

  describe 'with pledges', ->
    oldDispatch = store.dispatch

    before ->
      props.pledges = [
        id: 1
        content: 'testContent'
      ]

    it 'should dispatch an addEntities with normalized pledges', ->
      store.dispatch = sinon.spy()
      component = makeComponent(props)
      store.dispatch.called.should.equal true

    after ->
      store.dispatch = oldDispatch
