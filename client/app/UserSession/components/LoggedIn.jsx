import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import ButtonFor from '../../lib/Form/containers/ButtonFor'

export default class LoggedIn extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  }

  render() {
    const { currentUser } = this.props
    const profileHref = `/${I18n.locale}/users/profile`

    return(
      <div>
        <p>
          <b>
            Willkommen,<br />
            { currentUser.name }
          </b>
        </p>

        <hr className="u-mt u-mb" />

        <nav>
          <ul className="o-list-bare">
            <li className="u-mb-small">
              <a className="c-session__link" href={profileHref}>
                Meine Daten
              </a>
            </li>
            <li>
              <a className="c-session__link" href={profileHref}>
                Meine Versprechen
              </a>
            </li>
          </ul>
        </nav>

        <ButtonFor
          className="c-session__submit o-btn o-btn--full c-btn c-btn--primary u-mt"
          action='/users/sign_out'
          method='DELETE'
        >
          <FontAwesome name="sign-out" />
          {' '}
          {this.t('.logout')}
        </ButtonFor>
      </div>
    )
  }
}
