{ button, div } = React.DOM
{ PropTypes, createElement } = React
ChildComponent = require('../../lib/Base/components/ChildComponent')
FormFor = require('../../lib/Form/containers/FormFor')
Input = require('../../lib/Form/containers/Input')

module.exports = class PledgeForm extends ChildComponent
  @propTypes:
    onSubmit: PropTypes.func.isRequired
    formData: PropTypes.object.isRequired

  componentWillMount: ->
    @newPledge = new NewPledgeForm(@props.editedPledge)
    @props.ensurePledgeObjectExistence(@newPledge, @props.editedPledge)

  render: ->
    createElement FormFor,
      object: @newPledge
      formData: @props.formData
      onSubmit: (e) =>
        # e.preventDefault()
        # @props.onSubmit

      div
        className: 'PledgeForm-PledgeData'

        div
          className: 'PledgeForm-Sentence'
          @t('.promise.part1')

          createElement Input,
            attribute: 'content'

          @t('.promise.part2')

          createElement Input,
            attribute: 'amount'
            type: 'number'

          createElement Input,
            attribute: 'who'

          createElement Input,
            attribute: 'requirement'

        createElement Input,
          attribute: 'location'
        createElement Input,
          type: 'date'
          attribute: 'deadline'
        createElement Input,
          attribute: 'description'
          as: 'textarea'

        div {}, '[Bild]'
        div {}, '[Themenbereiche]'

        button
          type: 'button'
          disabled: true
          'Entwurf speichern'

      div
        className: 'PledgeForm-UserData'

        createElement Input,
          submodel: 'initiator'
          attribute: 'name'
        createElement Input,
          submodel: 'initiator'
          attribute: 'email'
          type: 'email'
        createElement Input,
          submodel: 'initiator'
          attribute: 'password'
          type: 'password'

      button
        type: 'submit'
        @t('.submit')
