{ PropTypes } = React
{ Provider } = require('react-redux')
RootComponent = require('../../lib/Base/components/RootComponent')
ActivePledgeForm = require('../containers/ActivePledgeForm')

module.exports = class NewPledge extends RootComponent
  @propTypes:
    formData: PropTypes.object.isRequired

  render: ->
    React.createElement Provider,
      store: global.store

      React.createElement ActivePledgeForm,
        formObject: NewPledgeForm
        formData: @props.formData
