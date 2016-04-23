{div} = React.DOM

class @NewPledge extends BaseComponent
  render: ->
    div
      className: 'NewPledge'
      React.createElement PledgeForm
