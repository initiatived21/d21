import JayForm from './jayform';

export default class NewSignatureFormObject extends JayForm {
  static get properties() {
    return [
      'name', 'anonymous', 'reason', 'email', 'organization', 'contact_person'
    ]
  }

  static get model() {
    return 'signature'
  }
}
