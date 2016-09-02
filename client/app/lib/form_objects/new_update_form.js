import { FormObject } from 'rform'

export default class NewUpdateFormObject extends FormObject {
  static get properties() {
    return [
      'content'
    ]
  }

  static get model() {
    return 'update'
  }

  validation() {
    this.required('content').filled({'max_size?': 1300})
  }
}
