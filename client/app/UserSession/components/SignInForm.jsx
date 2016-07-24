import React, { PropTypes  } from 'react'
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

        <Input className="c-input" attribute='email' inlineLabel />
        <Input className="c-input" attribute='password' type='password' inlineLabel />
        <Input className="c-checkbox" attribute='remember_me' type='checkbox' />

        <a className="c-session__link" href="">
          Passwort vergessen?
        </a>

        <button className="c-session__submit o-btn o-btn--full u-mt u-mb" type='submit'>
          <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1312 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45zm352-352v704q0 119-84.5 203.5t-203.5 84.5h-320q-13 0-22.5-9.5t-9.5-22.5q0-4-1-20t-.5-26.5 3-23.5 10-19.5 20.5-6.5h320q66 0 113-47t47-113v-704q0-66-47-113t-113-47h-312l-11.5-1-11.5-3-8-5.5-7-9-2-13.5q0-4-1-20t-.5-26.5 3-23.5 10-19.5 20.5-6.5h320q119 0 203.5 84.5t84.5 203.5z" fill="#fff"/>
          </svg>
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
