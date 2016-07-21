import React, { PropTypes  } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SignInFormObject from '../../lib/form_objects/sign_in_form'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'

export default class SignInForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
  }

  render() {
    return(
      <FormFor
        object={SignInFormObject}
        formData={this.props.formData}
        className="c-sign-in">

        <Input className="c-input" attribute='email' inlineLabel />
        <Input className="c-input" attribute='password' type='password' inlineLabel />
        <Input className="c-checkbox" attribute='remember_me' type='checkbox' />

        <button className="o-btn o-btn--small" type='submit'>
          Anmelden
          {this.t('.submit')}
        </button>
      </FormFor>
    )
  }
}
