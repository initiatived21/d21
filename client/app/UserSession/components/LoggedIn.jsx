import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import ButtonFor from '../../lib/Form/containers/ButtonFor'

export default class LoggedIn extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
  }

  render() {
    const { currentUser, authToken } = this.props
    const profileLink = (
      <a href={`/${I18n.locale}/users/profile`}>
        {currentUser.name}
      </a>
    )

    return (
      <div className='LoggedIn'>
        {this.t('.logged_in_as') + ' '}
        {profileLink}
        <ButtonFor action='/users/sign_out' method='DELETE'>
          {this.t('.logout')}
        </ButtonFor>
      </div>
    )
  }
}
