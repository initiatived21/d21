import JayForm from './jayform'

export default class SignInFormObject extends JayForm {
  static get properties() {
    return [
      'email', 'password', 'remember_me'
    ]
  }

  static get model() {
    return 'user'
  }
}
