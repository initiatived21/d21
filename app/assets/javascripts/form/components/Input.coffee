{ label, input, div } = React.DOM
{ PropTypes, Component } = React
# ChildComponent = require('../../react_base/components/ChildComponent')

module.exports = class Input extends React.Component
  @propTypes:
    model: PropTypes.string # required, but injection later is ok
    attribute: PropTypes.string.isRequired
    type: PropTypes.string
    submodel: PropTypes.string

  render: ->
    { model, attribute, type, submodel } = @props
    modelParam = @_modelParam(model, submodel)
    submodelKey = if submodel then ".#{submodel}" else ''

    div
      className: "input-#{attribute}"

      label
        htmlFor: "#{modelParam}[#{attribute}]"
        I18n.t("react_form.#{model}#{submodelKey}.#{attribute}.label")

      input
        type: type or 'text'
        name: "#{modelParam}[#{attribute}]"
        placeholder:
          I18n.t("react_form.#{model}#{submodelKey}.#{attribute}.placeholder")

  _modelParam: (model, submodel) ->
    if submodel
      "#{model}[#{submodel}]"
    else
      model
