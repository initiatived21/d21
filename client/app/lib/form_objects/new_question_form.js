import { FormObject } from 'rform'

export default class NewQuestionFormObject extends FormObject {
  static get properties() {
    return [
      'content'
    ]
  }

  static get model() {
    return 'comment'
  }

  validation() {
    this.required('content').filled({'max_size?': 650})
  }
}
