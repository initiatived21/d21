import JayForm from './jayform'

export default class NewUpdateFormObject extends JayForm {
  static get properties() {
    return [
      'content'
    ]
  }

  static get model() {
    return 'update'
  }
}
