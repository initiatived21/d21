import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SessionContainer from '../../UserSession/containers/SessionContainer'
/* import LanguageNav from './LanguageNav' */
import localPath from '../../lib/browser/localPath'
import { NEWSLETTER_URL } from '../../lib/config'

export default class SecondaryNav extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object,
    authToken: PropTypes.string.isRequired,
  }

  render() {
    const { authToken, currentUser } = this.props

    return (
      <nav className="c-secondary-nav">
        <ul className="c-secondary-nav__info o-list-inline o-list-inline--delimited">
          <li className="c-secondary-nav__item">
            <a className="c-secondary-nav__link" href={localPath('/contact')}>
              {this.t('.contact_link')}
            </a>
          </li>
          <li>
            <a className="c-secondary-nav__link" href={localPath('/faq')}>
              {this.t('.faq_link')}
            </a>
          </li>
          <li>
            <a className="c-secondary-nav__link" href={NEWSLETTER_URL} target="_blank">
              {this.t('.newsletter_link')}
            </a>
          </li>
        </ul>
        {
        /*
         * Hide language navigation until final release.
         */
        /*
        <LanguageNav />
        */
        }
        <SessionContainer authToken={authToken} currentUser={currentUser} />
      </nav>
    )
  }
}
