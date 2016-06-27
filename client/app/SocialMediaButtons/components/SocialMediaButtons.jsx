import React, { PropTypes } from 'react';

import ChildComponent from '../../lib/Base/components/ChildComponent.js';
import FacebookButton from './FacebookButton.jsx';
import TwitterButton from './TwitterButton.jsx';
import GoogleplusButton from './GoogleplusButton.jsx';
import XingButton from './XingButton.jsx';
import LinkedinButton from './LinkedinButton.jsx';

export default class SocialMediaButtons extends ChildComponent {
  handleClick(e) {
    e.preventDefault();

    const anchor = e.currentTarget;
    const url = anchor.href;

    const windowName = '_blank';
    const windowSizeX = '600';
    const windowSizeY = '460';
    const windowSize = `width=${windowSizeX},height=${windowSizeY}`;

    global.window.open(url, windowName, windowSize);
  }

  twitterText() {
    let text = this.props.twitterText ? this.props.twitterText : this.t('.twitter_text');
    text = encodeURIComponent(text);
    return text;
  }

  render() {
    const url = this.props.url;

    const commonProps = {
      url,
      handleClick: this.handleClick
    };

    return (
      <ul className="c-social-media o-list-inline">
        <FacebookButton {...commonProps} />
        <TwitterButton {...commonProps} text={this.twitterText()} />
        <GoogleplusButton {...commonProps} />
        <XingButton {...commonProps} />
        <LinkedinButton {...commonProps} />
      </ul>
    );
  }
}

SocialMediaButtons.propTypes = {
  url: PropTypes.string,
  twitterText: PropTypes.string
};

SocialMediaButtons.defaultProps = {
  url: '', /*global.document.location.href,*/
};
