import JayForm from './jayform'

export default class NewAnswerFormObject extends JayForm {
  static get properties() {
    return [
      'response'
    ]
  }

  static get model() {
    return 'comment'
  }
}
