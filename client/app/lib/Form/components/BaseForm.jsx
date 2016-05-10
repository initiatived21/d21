import React, { PropTypes } from 'react';
import ChildComponent from '../../Base/components/ChildComponent';

// A general form helper in the general style of rails' #form_for
//
// Renders the form tag with general hidden fields like auth token. Also sets
// up it's children with information about the outer form.
export default class BaseForm extends ChildComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.shape({
      action: PropTypes.string.isRequired,
      authToken: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      errors: PropTypes.object
    })
  };

  render() {
    const { onSubmit, children } = this.props;
    const { action, authToken } = this.props.formData;

    return(
      <form action={action} method='POST' onSubmit={onSubmit}>

        <input type='hidden' name='authenticity_token' value={authToken} />
        <input type='hidden' name='utf8' value='&#x2713;' />

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
        let errors = undefined
        if (this.props.formData.errors) {
          errors = this.props.formData.errors[child.props.attribute]
        }

        return React.cloneElement(child, {
          model: this.props.formData.model,
          object: this.props.object,
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
