{div} = React.DOM

class @NewPledge extends BaseContainer
  handleSubmit: (e) ->
    e.preventDefault()
    alert('TODO: submit me!')

  render: ->
    div
      className: 'NewPledge'
      React.createElement PledgeForm,
        handleSubmit: @handleSubmit
