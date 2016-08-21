import { FormObject } from 'rform'

export default class SignInFormObject extends FormObject {
  static get properties() {
    return [
      'email', 'password', 'remember_me'
    ]
  }

  static get model() {
    return 'user'
  }
}
