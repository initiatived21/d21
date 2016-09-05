import React, { PropTypes } from 'react'
import { Form, Button } from 'rform'
import FontAwesome from 'react-fontawesome'
import I18n from 'i18n-js'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import UserForm from '../../UserForm/components/UserForm'
import UserFormObject from '../../lib/form_objects/user_form'

export default class ProfileUserForm extends ChildComponent {
  static props = {
    afterResponse: PropTypes.func.isRequired,
    userFormSent: PropTypes.bool
  }

  render() {
    const { formConfig, afterResponse, userFormSent } = this.props

    let formSentMessage
    if (userFormSent) {
      formSentMessage = (
        <p className="u-mt"><i>{this.t('.form_sent')}</i></p>
      )
    }

    return (
      <Form ajax
        className="u-2/3@l"
        model='user'
        formObjectClass={UserFormObject}
        afterResponse={afterResponse}
        {...formConfig}
      >
        <UserForm labelContent={I18n.t('rform.user.new_password.label')} />
        {formSentMessage}
        <Button className="o-btn c-btn c-btn--primary u-mt">
          <FontAwesome name="check" />
          {' '}
          {this.t('.button')}
        </Button>
      </Form>
    )
  }
}
