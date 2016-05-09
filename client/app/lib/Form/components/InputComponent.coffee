{ PropTypes, Component } = React
{ label, input, textarea, div, span } = React.DOM

module.exports = class Input extends Component
  @propTypes:
    model: PropTypes.string # required, but injection later is ok
    attribute: PropTypes.string.isRequired
    type: PropTypes.string
    submodel: PropTypes.string
    errors: PropTypes.array
    as: PropTypes.string

  render: ->
    { model, attribute, type, submodel, errors, as, object } = @props
    modelParam = @_modelParam(model, submodel)
    submodelKey = if submodel then ".#{submodel}" else ''

    div
      className: "input-#{attribute}"

      label
        htmlFor: "#{modelParam}[#{attribute}]"
        I18n.t("react_form.#{model}#{submodelKey}.#{attribute}.label")

      if as is 'textarea'
        textarea
          name: "#{modelParam}[#{attribute}]"
          placeholder:
            I18n.t("react_form.#{model}#{submodelKey}.#{attribute}.placeholder")

      else
        input
          type: type or 'text'
          name: "#{modelParam}[#{attribute}]"
          placeholder:
            I18n.t("react_form.#{model}#{submodelKey}.#{attribute}.placeholder")
          onChange: (e) =>
            @props.onChange attribute, $(e.target).val()
          # onBlur: (e) =>
          #   @props.onBlur attribute, object

      if errors
        span
          className: 'inline-errors'
          errors.join(', ')


  _modelParam: (model, submodel) ->
    if submodel
      "#{model}[#{submodel}]"
    else
      model
