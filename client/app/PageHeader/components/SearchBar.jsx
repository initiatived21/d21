import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import localPath from '../../lib/browser/localPath'
import { FACEBOOK_ACCOUNT_URL, TWITTER_ACCOUNT_URL } from '../../lib/config'

export default class SearchBar extends ChildComponent {
  render() {
    return (
      <div className="c-search-bar u-mt u-fr">
        <ul className="c-search-bar__social-media c-social-media">
          <li>
            <a className="c-social-media__button"
              href={FACEBOOK_ACCOUNT_URL}
              title={this.t('.facebook_title')}
              target="_blank">
              <span className="fa fa-facebook"></span>
            </a>
          </li>
          <li>
            <a className="c-social-media__button"
              href={TWITTER_ACCOUNT_URL}
              title={this.t('.twitter_title')}
              target="_blank">
              <span className="fa fa-twitter"></span>
            </a>
          </li>
        </ul>
        {' '}
        <form className="c-search-bar__form" action={localPath('/pledges')} method="GET">
          <input className="c-search-bar__input" name="query" type="search"
            placeholder={this.t('.search_placeholder')} />
          {' '}
          <button title={this.t('.search_title')}
            className="o-btn c-search-bar__submit c-btn c-btn--primary"
            type="submit">
            <span className="fa fa-search"></span>
          </button>
        </form>
      </div>
    )
  }
}
