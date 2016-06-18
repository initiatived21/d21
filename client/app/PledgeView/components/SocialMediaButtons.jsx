import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class SocialMediaButtons extends ChildComponent {
  static propTypes = {
  };

  componentDidMount() {
    /*
     * Enable Shariff social media buttons.
     * The 'Shariff' dependency is injected by webpack into this module only for the
     * client side JavaScript bundle. See webpack.client.rails.config.js for this.
     * componentDidMount is not used on the server, as far as we know, so this should work.
     */
    const container = $('.c-social-media-buttons');

    new Shariff(container, {
      services: ['facebook', 'twitter', 'googleplus', 'xing', 'linkedin'],
      lang: I18n.locale,
      title: this.t('.twitter_message')
    });
  }

  render() {
    return (
      <div className="c-social-media-buttons shariff"></div>
    );
  }
}
