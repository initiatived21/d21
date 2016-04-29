{ button, div } = React.DOM
{ PropTypes, createElement } = React
ChildComponent = require('../../lib/Base/components/ChildComponent')
BaseForm = require('../../lib/Form/components/BaseForm')
Input = require('../../lib/Form/components/Input')

module.exports = class PledgeForm extends ChildComponent
  @propTypes:
    onSubmit: PropTypes.func.isRequired
    formData: PropTypes.object.isRequired

  render: ->
    createElement BaseForm,
      formData: @props.formData
      onSubmit: (e) =>
        e.preventDefault()
        @props.onSubmit
          content: $('input[name=content]').val()

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
