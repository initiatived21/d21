import JayForm from './jayform';

export default class BasePledgeFormObject extends JayForm {
  static get properties() {
    return [
      'title', 'content', 'amount', 'who', 'requirement', 'location', 'deadline',
      'image', 'description', 'tag_ids'
    ]
  }
}
  // properties...

  // @property('content')
  // @property 'amount'
  // @property 'who'
  // @property 'requirement'
  // @property 'location'
  // @property 'deadline'
  // @property 'description'
  // # image
  // # tags
  //
  // @property 'initiator', ->
  //
  //   @property 'name'
  //   @property 'organization'
  //   # image
  //   @property 'email'
  //   @property 'password'
  //
  //   @validation ->
  //     @required('name').filled
  //     @required('organization')
  //     @required('email').filled
  //     @required('password').filled
  //
  // # Validation
  //
  // @validation ->
  //   @required('content').filled
  //   @required('amount').filled('int?')
  //   @required('who').filled
  //   @required('requirement').filled
  //   @required('location')
  //   @required('deadline').filled('date?')
  //   @required('description')