{ form, input } = React.DOM
{ PropTypes } = React
ChildComponent = require('../../Base/components/ChildComponent')

# A general form helper in the general style of rails' #form_for
#
# Renders the form tag with general hidden fields like auth token. Also sets
# up it's children with information about the outer form.
module.exports = class BaseForm extends ChildComponent
  @propTypes:
    onSubmit: PropTypes.func.isRequired
    formData: PropTypes.shape
      action: PropTypes.string.isRequired
      authToken: PropTypes.string.isRequired
      model: PropTypes.string.isRequired
      errors: PropTypes.object

  render: ->
    { onSubmit, children } = @props
    { action, authToken } = @props.formData

    form
      action: action
      method: 'POST'
      onSubmit: onSubmit

      input
        type: 'hidden'
        name: 'authenticity_token'
        value: authToken
      input
        type: 'hidden'
        name: 'utf8'
        value: '&#x2713;'

      @renderChildren(children)

  # Return all children, but recursively inject those of type Input
  # with model and error props
  renderChildren: (children) ->
    React.Children.map children, (child) =>
      unless typeof child is 'object'
        return child

      if child.type.name is 'Input' # is our custom Input component, inject!
        React.cloneElement child,
          model: @props.formData.model
          errors: @props.formData.errors?[child.props.attribute]
      else
        if child.props.children # has further children, needs recursion
          React.cloneElement child,
            children: @renderChildren(child.props.children)
        else # last non-Input child, just return original
          child
