import React, { PropTypes } from 'react';

import ChildComponent from '../../lib/Base/components/ChildComponent';
import SignInForm from './SignInForm';
import LoggedIn from './LoggedIn';

export default class Session extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    authToken: PropTypes.string.isRequired,
    onWindowClick: PropTypes.func.isRequired
  }

  handleClickOutside(event) {
    this.props.onWindowClick(event)
  }

  render() {
    const { currentUser, onLoginClick, isVisible } = this.props

    let loggedInOrOutComponent
    if (currentUser) {
      loggedInOrOutComponent = <LoggedIn currentUser={currentUser} onLoginClick={onLoginClick}
        isVisible={isVisible} />
    } else {
      loggedInOrOutComponent = <SignInForm formData={{ action: '/users/sign_in', model: 'user' }}
        onLoginClick={onLoginClick} isVisible={isVisible} />
    }

    return loggedInOrOutComponent
  }
}
