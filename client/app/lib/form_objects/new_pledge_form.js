import JayForm from './jayform';

export default class NewPledgeFormObject extends JayForm {
  static get properties() {
    return [
      'content', 'amount', 'who', 'requirement', 'location', 'deadline',
      'description', 'tag_ids', 'initiator'
    ]
  }

  static get submodels() {
    return ['initiator']
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
