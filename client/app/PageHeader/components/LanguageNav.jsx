import React from 'react'
import I18n from 'i18n-js'

const LanguageNav = () => (
  <ul className="c-secondary-nav__lang o-list-inline">
    <li className={`c-secondary-nav__item${I18n.locale === 'de' ? ' c-secondary-nav__item--active' : ''}`}>
      <a className="c-secondary-nav__link" href="/de">
        de
      </a>
    </li>
    <li className={`c-secondary-nav__item${I18n.locale === 'en' ? ' c-secondary-nav__item--active' : ''}`}>
      <a className="c-secondary-nav__link" href="/en">
        en
      </a>
    </li>
  </ul>
)

export default LanguageNav
