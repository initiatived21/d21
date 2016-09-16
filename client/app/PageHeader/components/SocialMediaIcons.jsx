import React from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import FontAwesome from 'react-fontawesome'
import { FACEBOOK_ACCOUNT_URL, TWITTER_ACCOUNT_URL } from '../../lib/config'

export default class SocialMediaIcons extends ChildComponent {
  render() {
    return (
      <ul className="c-page-head__social-media c-social-media">
        <li>
          <a className="c-social-media__button"
            href={FACEBOOK_ACCOUNT_URL}
            title={this.t('.facebook_title')}
            target="_blank">
            <FontAwesome name="facebook" />
          </a>
        </li>
        <li>
          <a className="c-social-media__button"
            href={TWITTER_ACCOUNT_URL}
            title={this.t('.twitter_title')}
            target="_blank">
            <FontAwesome name="twitter" />
          </a>
        </li>
      </ul>
    )
  }
}
