{ PropTypes } = React
{ Provider } = require('react-redux')
{ addEntities, addDenormalizedPledges } = require('../actions/pledgeActions')
RootComponent = require('../../lib/Base/components/RootComponent')
FilteredListContainer = require('../containers/FilteredListContainer')
normalize = require('../../lib/normalization')

module.exports = class ElementList extends RootComponent
  @propTypes:
    pledges: PropTypes.array.isRequired
    filter: PropTypes.string.isRequired

  componentWillMount: ->
    # Register actioncable listener TODO: somewhere else! call only once
    App?.pledges = App.cable.subscriptions.create 'PledgesChannel',
      received: (data) ->
        console.log 'new from cable:', data.pledge
        normalized = normalize('pledge', data.pledge)
        store.dispatch addEntities(normalized.entities)

    # Put received pledges into store
    normalizedPledges = normalize('pledges', @props.pledges)
    store.dispatch addEntities(normalizedPledges.entities)

  render: ->
    React.createElement Provider,
      store: global.store

      React.createElement FilteredListContainer,
        filter: @props.filter
