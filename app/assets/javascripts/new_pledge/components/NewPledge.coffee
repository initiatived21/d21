{ PropTypes } = React
{ Provider } = require('react-redux')
RootComponent = require('../../react_base/components/RootComponent')
ActivePledgeForm = require('../containers/ActivePledgeForm')

module.exports = class NewPledge extends RootComponent
  @propTypes:
    formData: PropTypes.object.isRequired

  render: ->
    React.createElement Provider,
      store: global.store

      React.createElement ActivePledgeForm,
        formData: @props.formData
