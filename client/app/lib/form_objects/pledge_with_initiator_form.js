import { FormObject } from 'rform'

export default class PledgeWithInitiatorFormObject extends FormObject {
  static get properties() {
    return [
      'title', 'content', 'amount', 'who', 'requirement', 'location', 'deadline',
      'image', 'description', 'tag_ids', 'cropping'
    ]
  }

  static get model() {
    return 'pledge'
  }

  static get submodels() {
    return ['initiator']
  }

  static get submodelProperties() {
    return {
      initiator: [
        'name', 'organization', 'email', 'password', 'password_confirmation',
        'avatar', 'cropping'
      ]
    }
  }

  validation() {
    this.configure({'notCropping?': (_validatable, cropping) => !cropping})

    this.required('title').filled({'max_size?': 85})
    this.required('content').filled({'max_size?': 80})
    this.required('amount').filled('int?', {'gt?': 0})
    this.required('who').filled({'max_size?': 65})
    this.required('requirement').filled({'max_size?': 95})
    this.required('location').filled({'max_size?': 50})
    this.required('deadline').filled({
      'gt?': new Date().toISOString().substring(0,10)
    })
    this.maybe('image', {if: !!this.attributes.cropping})
      .filled({'notCropping?': this.attributes.cropping})

    this.inSubmodel('initiator', () => {
      this.required('name').filled()
      this.required('email').filled()
      this.required('password').filled()
      this.required('password_confirmation').filled({
        'matches?': this.attributes.initiator.password
      })
      this.maybe('avatar', {if: !!this.attributes.initiator.cropping})
        .filled({'notCropping?': this.attributes.initiator.cropping})
    })
  }
}
