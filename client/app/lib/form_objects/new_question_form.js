import JayForm from './jayform'

export default class NewQuestionFormObject extends JayForm {
  static get properties() {
    return [
      'content'
    ]
  }

  static get model() {
    return 'comment'
  }
}
