import React, { PropTypes  } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SignInFormObject from '../../lib/form_objects/sign_in_form'

export default class SignInForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired
  }

  render() {
    const { formData } = this.props

    const newPledgePath = `/${I18n.locale}/pledges/new`

    return(
      <Form {...formData} formObjectClass={SignInFormObject}>
        <InputSet ariaLabelOnly
          className="c-input u-mb-small" attribute='email'
        />
        <InputSet ariaLabelOnly
          className="c-input u-mb-small" attribute='password' type='password'
        />
        <InputSet labelAfterInput
          className="c-checkbox c-checkbox--small u-mb-small"
          attribute='remember_me' type='checkbox'
        />

        <a className="c-session__link" href="">
          Passwort vergessen?
        </a>

        <button
          className="c-session__submit o-btn o-btn--full c-btn c-btn--primary u-mt u-mb"
          type='submit'
        >
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
      </Form>
    )
  }
}
