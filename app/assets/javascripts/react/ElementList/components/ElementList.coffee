{ PropTypes } = React
{ Provider } = require('react-redux')
{ addEntities } = require('../../lib/actions/entityActions')
RootComponent = require('../../lib/Base/components/RootComponent')
FilteredListContainer = require('../containers/FilteredListContainer')
normalize = require('../../lib/normalization')

module.exports = class ElementList extends RootComponent
  @propTypes:
    pledges: PropTypes.array.isRequired
    filter: PropTypes.string.isRequired

  componentWillMount: ->
    # Put received pledges into store
    normalizedPledges = normalize('pledges', @props.pledges)
    global.store.dispatch addEntities(normalizedPledges.entities)

  render: ->
    React.createElement Provider,
      store: global.store

      React.createElement FilteredListContainer,
        filter: @props.filter
