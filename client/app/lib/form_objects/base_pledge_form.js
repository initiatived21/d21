import { FormObject } from 'rform'

export default class BasePledgeFormObject extends FormObject {
  static get properties() {
    return [
      'title', 'content', 'amount', 'who', 'requirement', 'location',
      'deadline', 'image', 'remove_image', 'description', 'tag_ids', 'cropping'
    ]
  }

  static get model() {
    return 'pledge'
  }

  validation() {
    this.configure({'notCropping?': (_validatable, cropping) => !cropping})

    this.required('title').filled({'max_size?': 80})
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
  }
}
