import { FormObject } from 'rform'

export default class UserFormObject extends FormObject {
  static get properties() {
    return [
      'name', 'organization', 'email', 'password', 'password_confirmation',
      'avatar', 'remove_avatar'
    ]
  }

  static get model() {
    return 'user'
  }

  validation() {
    this.required('name').filled()
    this.required('email').filled()
  }
}
