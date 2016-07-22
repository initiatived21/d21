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
    const { isVisible, onLoginClick, currentUser, authToken } = this.props

    const className = `c-sign-in${ isVisible ? '' : ' c-sign-in--hidden'}`

    return(
      <div style={{ display: 'inline-block' }}>
        <a href="#" onClick={onLoginClick} className="c-secondary-nav__sign-in o-btn o-btn--small">
          <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1600 1405q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42 21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z" fill="#fff"/>
          </svg>
          {' '}
          Mein Konto
        </a>

        <div className={className}>
          <p>
            Willkommen,<br />
            { currentUser.name }
          </p>
          <hr />

          <a className="c-sign-in__link" href="">
            Meine Daten
          </a>

          <a className="c-sign-in__link" href="">
            Meine Versprechen
          </a>

          <ButtonFor className="c-secondary-nav__sign-in o-btn o-btn--small" action='/users/sign_out' method='DELETE'>
            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M704 1440q0 4 1 20t.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h320q13 0 22.5 9.5t9.5 22.5q0 4 1 20t.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-66 0-113 47t-47 113v704q0 66 47 113t113 47h312l11.5 1 11.5 3 8 5.5 7 9 2 13.5zm928-544q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45z" fill="#fff"/>
            </svg>
            {' '}
            {this.t('.logout')}
          </ButtonFor>

        </div>
      </div>
    )
  }
}
