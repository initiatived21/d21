import { FormObject } from 'rform'

export default class NewAnswerFormObject extends FormObject {
  static get properties() {
    return [
      'response'
    ]
  }

  static get model() {
    return 'comment'
  }
}
