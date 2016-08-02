import React, { PropTypes } from 'react';

import ChildComponent from '../../lib/Base/components/ChildComponent';
import SignInForm from './SignInForm';
import LoggedIn from './LoggedIn';

export default class Session extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object,
    authToken: PropTypes.string.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onWindowClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool
  }

  handleClickOutside(event) {
    this.props.onWindowClick(event)
  }

  render() {
    const { currentUser, onLoginClick, isVisible } = this.props

    let button
    if (currentUser) {
      button = (
        <a href="#" onClick={onLoginClick}
          className="c-session__toggle o-btn o-btn--small">
          <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1600 1405q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42 21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z" fill="#fff"/>
          </svg>
          {' '}
          Mein Konto
        </a>
      )
    }
    else {
      button = (
        <a href="#" onClick={onLoginClick}
          className="c-session__toggle o-btn o-btn--small">
          <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1312 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45zm352-352v704q0 119-84.5 203.5t-203.5 84.5h-320q-13 0-22.5-9.5t-9.5-22.5q0-4-1-20t-.5-26.5 3-23.5 10-19.5 20.5-6.5h320q66 0 113-47t47-113v-704q0-66-47-113t-113-47h-312l-11.5-1-11.5-3-8-5.5-7-9-2-13.5q0-4-1-20t-.5-26.5 3-23.5 10-19.5 20.5-6.5h320q119 0 203.5 84.5t84.5 203.5z"/>
          </svg>
          {' '}
          Login
        </a>
      )
    }

    let loggedInOrOutComponent
    if (currentUser) {
      loggedInOrOutComponent = <LoggedIn currentUser={currentUser} />
    }
    else {
      loggedInOrOutComponent = <SignInForm formData={{ action: '/users/sign_in', model: 'user' }} />
    }

    const className = `c-session__window${ isVisible ? '' : ' c-session__window--hidden'}`

    return (
      <div className="c-session">
        {button}

        <div className={className}>
          <svg className="c-session__triangle" width="36" height="18" viewBox="0 0 36 17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
            <polygon points="0,17 36,17 18,0" />
          </svg>

          {loggedInOrOutComponent}
        </div>
      </div>
    )
  }
}
