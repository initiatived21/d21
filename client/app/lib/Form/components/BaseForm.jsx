import React, { PropTypes } from 'react';
import ChildComponent from '../../Base/components/ChildComponent';

// A general form helper in the general style of rails' #form_for
//
// Renders the form tag with general hidden fields like auth token. Also sets
// up it's children with information about the outer form.
export default class BaseForm extends ChildComponent {
  static propTypes = {
    object: PropTypes.func.isRequired,
    formObject: PropTypes.object.isRequired,
    existingAttrs: PropTypes.object.isRequired,
    ensureStateObjectExistence: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.shape({
      action: PropTypes.string.isRequired,
      authToken: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      errors: PropTypes.object,
      method: PropTypes.string,
    }),
  }

  componentWillMount() {
    const {
      ensureStateObjectExistence, formObject, editedStateObject, existingAttrs
    } = this.props
    ensureStateObjectExistence(formObject, editedStateObject, existingAttrs)
  }

  render() {
    const { onSubmit, children, multipart } = this.props;
    const { action, authToken, method } = this.props.formData;
    const enctype =
      multipart ? 'multipart/form-data' : 'application/x-www-form-urlencoded'

    let formMethod
    let hiddenMethodField = undefined
    if (['PUT', 'PATCH', 'DELETE'].indexOf(method) > -1) {
      formMethod = 'POST'
      hiddenMethodField = <input type='hidden' name='_method' value={method} />
    } else {
      formMethod = method || 'POST'
    }

    return(
      <form action={action} method={formMethod} onSubmit={onSubmit} encType={enctype}>

        <input type='hidden' name='authenticity_token' value={authToken} />
        <input type='hidden' name='utf8' value='&#x2713;' />
        {hiddenMethodField}

        {this.renderChildren(children)}
      </form>
    )
  }

  // Return all children, but recursively inject those of type Input
  // with model and error props
  renderChildren(children) {
    return React.Children.map(children, child => {
      if (typeof child !== 'object') { return child; }

      if (child.type.isInput) { // is our custom Input component: inject!
        const { formData, formObject } = this.props

        let errors = undefined
        if (formData.object) {
          if (
            child.props.submodel &&
              formData.object.fields[child.props.submodel].errors
          ) {
            errors = formData.object.fields[child.props.submodel]
              .errors.errors[child.props.attribute]
          } else if (formData.object.errors) {
            errors = formData.object.errors.errors[child.props.attribute]
          }
        }

        return React.cloneElement(child, {
          model: formData.model,
          object: formObject,
          serverErrors: errors
        });
      } else {
        if (child.props.children) { // has further children, needs recursion
          return React.cloneElement(child, {
            children: this.renderChildren(child.props.children)
          });
        } else { // last non-Input child, just return original
          return child;
        }
      }
    });
  }
};
