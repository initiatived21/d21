normalize = require('../react/lib/normalization')

# ! Docready called only once, not on turbolinks site switch.
$(document).ready ->
  App.pledges = App.cable.subscriptions.create 'PledgesChannel',
    connected: -> console.log 'Successfully connected.'
    disconnect: -> console.log 'Got disconnected.'

    # When receiving new pledges, put them into the state store normalized
    received: (data) ->
      console.log 'new from cable:', data.pledge
      normalized = normalize('pledge', data.pledge)
      store.dispatch addEntities(normalized.entities)
