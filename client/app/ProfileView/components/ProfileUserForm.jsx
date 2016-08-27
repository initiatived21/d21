import React, { PropTypes } from 'react'
import { Form, Button } from 'rform'
import I18n from 'i18n-js'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import UserForm from '../../UserForm/components/UserForm'
import UserFormObject from '../../lib/form_objects/user_form'

export default class ProfileUserForm extends ChildComponent {
  render() {
    const {
      formConfig
    } = this.props

    return (
      <Form ajax
        model='user' formObjectClass={UserFormObject}
        {...formConfig}
      >
        <UserForm labelContent={I18n.t('rform.user.new_password.label')} />
        <Button>
          {this.t('.button')}
        </Button>
      </Form>
    )
  }
}
