import { FormObject } from 'rform'

export default class UserFormObject extends FormObject {
  static get properties() {
    return [
      'name', 'organization', 'email', 'password', 'password_confirmation',
      'avatar', 'remove_avatar', 'cropping'
    ]
  }

  static get model() {
    return 'user'
  }

  validation() {
    this.configure({'notCropping?': (_validatable, cropping) => !cropping})

    this.maybe('avatar', {if: !!this.attributes.cropping})
      .filled({'notCropping?': this.attributes.cropping})

    this.required('name').filled()
    this.required('email').filled()
  }
}
