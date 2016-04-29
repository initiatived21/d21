{ PropTypes } = React
{ Provider } = require('react-redux')
{ addEntities, addDenormalizedPledges } = require('../actions/pledgeActions')
RootComponent = require('../../react_base/components/RootComponent')
LatestPledgesContainer = require('../containers/LatestPledgesContainer')
normalize = require('../../normalization')

module.exports = class ListPledges extends RootComponent
  componentWillMount: ->
    # Register actioncable listener
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

      React.createElement LatestPledgesContainer
