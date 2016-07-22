import React, { PropTypes } from 'react'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import ButtonFor from '../../lib/Form/containers/ButtonFor'

export default class LoggedIn extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  }

  render() {
    const { currentUser } = this.props

    return(
      <div>
        <p>
          <b>Willkommen,<br />
          { currentUser.name }</b>
        </p>

        <hr className="u-mt u-mb" />

        <nav>
          <ul className="o-list-bare">
            <li className="u-mb-small">
              <a className="c-session__link" href="">
                Meine Daten
              </a>
            </li>
            <li>
              <a className="c-session__link" href="">
                Meine Versprechen
              </a>
            </li>
          </ul>
        </nav>

        <ButtonFor className="c-session__submit o-btn o-btn--full u-mt" action='/users/sign_out'
          method='DELETE'>
          <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M704 1440q0 4 1 20t.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h320q13 0 22.5 9.5t9.5 22.5q0 4 1 20t.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-66 0-113 47t-47 113v704q0 66 47 113t113 47h312l11.5 1 11.5 3 8 5.5 7 9 2 13.5zm928-544q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45z" fill="#fff"/>
          </svg>
          {' '}
          {this.t('.logout')}
        </ButtonFor>
      </div>
    )
  }
}
