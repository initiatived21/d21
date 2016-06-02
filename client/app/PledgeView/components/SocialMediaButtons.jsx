import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class SocialMediaButtons extends ChildComponent {
  static propTypes = {
  };

  render() {
    const {} = this.props;

    return (
      <div className="c-social-media-buttons">
        social media buttons
      </div>
    );
  }
}
