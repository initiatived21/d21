# App.pledges = App.cable.subscriptions.create 'PledgesChannel',
#   connected: ->
#     console.log 'connect!'
#
#   disconnect: ->
#     console.log 'disconnect...'
#
#   rejected: ->
#     console.log 'rejected?'
#
#   received: (data) ->
#     console.log 'new from cable:', data.pledge
