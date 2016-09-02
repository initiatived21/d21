import { FormObject } from 'rform'

export default class NewSignatureFormObject extends FormObject {
  static get properties() {
    return [
      'name', 'anonymous', 'reason', 'email', 'organization', 'contact_person'
    ]
  }

  static get model() {
    return 'signature'
  }

  validation() {
    this.required('name').filled({'size?': [2, 32]})
    this.required('email').filled({'size?': [2, 32]})
  }
}
