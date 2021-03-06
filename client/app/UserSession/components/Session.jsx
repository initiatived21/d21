import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SignInForm from './SignInForm'
import LoggedIn from './LoggedIn'
import localPath from '../../lib/browser/localPath'

export default class Session extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object,
    authToken: PropTypes.string.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onWindowClick: PropTypes.func.isRequired,
    onProfileLinkClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool
  }

  handleClickOutside(event) {
    this.props.onWindowClick(event)
  }

  render() {
    const { currentUser, onLoginClick, isVisible, onProfileLinkClick } = this.props

    let button
    if (currentUser) {
      button = (
        <a href="#" onClick={onLoginClick}
          className="c-session__toggle o-btn c-btn c-btn--primary">
          <FontAwesome name="user" />
          {' '}
          {this.t('.my_account')}
        </a>
      )
    }
    else {
      button = (
        <a href="#" onClick={onLoginClick}
          className="c-session__toggle o-btn c-btn c-btn--primary">
          <FontAwesome name="sign-in" />
          {' '}
          {this.t('.sign_in')}
        </a>
      )
    }

    let loggedInOrOutComponent
    if (currentUser) {
      loggedInOrOutComponent = <LoggedIn currentUser={currentUser} onLinkClick={onProfileLinkClick} />
    }
    else {
      loggedInOrOutComponent = <SignInForm formData={{ action: localPath('/users/sign_in'),
        model: 'user' }} />
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
