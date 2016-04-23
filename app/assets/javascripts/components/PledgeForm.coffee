{form, div, label, input, button} = React.DOM

class @PledgeForm extends LocalizedComponent
  handleSubmit: (e) ->
    e.preventDefault()
    alert('TODO: submit me!')
  render: ->
    form
      onSubmit: @handleSubmit

      div
        className: 'PledgeForm-Sentence'
        @t('.promise.part1')

        label
          htmlFor: 'content'
          @t('.content.label')
        input
          type: 'text'
          name: 'content'
          placeholder: @t('.content.placeholder')

        @t('.promise.part2')

        label
          htmlFor: 'amount'
          @t('.amount.label')
        input
          type: 'text'
          name: 'amount'

        label
          htmlFor: 'who'
          @t('.who.label')
        input
          type: 'number'
          name: 'who'

        label
          htmlFor: 'requirement'
          @t('.requirement.label')
        input
          type: 'text'
          name: 'requirement'

      button
        type: 'submit'
        @t('.submit')
