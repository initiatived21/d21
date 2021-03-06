import React, { PropTypes  } from 'react'
import { Form, InputSet } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SignInFormObject from '../../lib/form_objects/sign_in_form'
import localPath from '../../lib/browser/localPath'

export default class SignInForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired
  }

  render() {
    const { formData } = this.props

    return(
      <Form {...formData} formObjectClass={SignInFormObject}>
        <InputSet ariaLabelOnly
          wrapperClassName="c-input u-mb-small" attribute='email'
        />
        <InputSet ariaLabelOnly
          wrapperClassName="c-input u-mb-small" attribute='password' type='password'
        />
        <InputSet labelAfterInput
          wrapperClassName="c-checkbox c-checkbox--small u-mb-small"
          attribute='remember_me' type='checkbox'
        />

        <a className="c-session__link" href={localPath('/users/password/new')}>
          {this.t('.forgot_password')}
        </a>

        <button
          className="c-session__submit o-btn o-btn--full c-btn c-btn--primary u-mt u-mb"
          type='submit'
        >
          <FontAwesome name="sign-in" />
          {' '}
          {this.t('.submit')}
        </button>

        <p>
          {this.t('.no_account')}
          <a className="c-session__link" href={localPath('/pledges/new')}>
            {this.t('.sign_up_link')}
          </a>
        </p>
      </Form>
    )
  }
}
