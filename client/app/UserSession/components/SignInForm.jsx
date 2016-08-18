import React, { PropTypes  } from 'react'
import FontAwesome from 'react-fontawesome'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SignInFormObject from '../../lib/form_objects/sign_in_form'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'

export default class SignInForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired
  }

  render() {
    const { formData } = this.props

    const newPledgePath = `/${I18n.locale}/pledges/new`

    return(
      <FormFor object={SignInFormObject} formData={formData}>

        <Input className="c-input u-mb-small" attribute='email' inlineLabel />
        <Input className="c-input u-mb-small" attribute='password' type='password' inlineLabel />

        <Input className="c-checkbox c-checkbox--small u-mb-small" attribute='remember_me'
          type='checkbox' />

        <a className="c-session__link" href="">
          Passwort vergessen?
        </a>

        <button className="c-session__submit o-btn o-btn--full c-btn c-btn--primary u-mt u-mb"
          type='submit'>
          <FontAwesome name="sign-in" />
          {' '}
          Anmelden
          {this.t('.submit')}
        </button>

        <p>
          Noch kein Konto?
          <a className="c-session__link" href={newPledgePath}>
            Pledge anlegen und registrieren
          </a>
        </p>
      </FormFor>
    )
  }
}
