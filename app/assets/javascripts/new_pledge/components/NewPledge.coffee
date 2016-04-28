{ div } = React.DOM
{ PropTypes } = React
{ Provider } = require('react-redux')
BaseComponent = require('../../react_base/components/BaseComponent')
ActivePledgeForm = require('../containers/ActivePledgeForm')

module.exports = class NewPledge extends BaseComponent
  @propTypes:
    formData: PropTypes.object.isRequired

  render: ->
    React.createElement Provider,
      store: global.store

      React.createElement ActivePledgeForm,
        formData: @props.formData
