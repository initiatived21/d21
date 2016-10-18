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
  }

  render() {
    const { formConfig, afterResponse } = this.props

    return (
      <Form ajax requireValid
        className="u-2/3@l"
        model='user'
        formObjectClass={UserFormObject}
        afterResponse={afterResponse}
        {...formConfig}
      >
        <UserForm labelContent={I18n.t('rform.user.new_password.label')} />
        <Button className="o-btn c-btn c-btn--primary u-mt">
          <FontAwesome name="check" />
          {' '}
          {this.t('.button')}
        </Button>
      </Form>
    )
  }
}
