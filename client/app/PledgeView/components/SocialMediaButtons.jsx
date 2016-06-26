import React, { PropTypes } from 'react';
import I18n from 'i18n-js';

import ChildComponent from '../../lib/Base/components/ChildComponent.js';
import FacebookButton from './FacebookButton.jsx';
import TwitterButton from './TwitterButton.jsx';
import GoogleplusButton from './GoogleplusButton.jsx';
import XingButton from './XingButton.jsx';
import LinkedinButton from './LinkedinButton.jsx';

class SocialMediaButtons extends ChildComponent {
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

  render() {
    const url = this.props.url;
    const twitterText = encodeURIComponent(this.props.twitterText);

    return (
      <ul className="c-social-media o-list-inline">
        <FacebookButton url={url} handleClick={this.handleClick} />
        <TwitterButton url={url} handleClick={this.handleClick} text={twitterText} />
        <GoogleplusButton url={url} handleClick={this.handleClick} />
        <XingButton url={url} handleClick={this.handleClick} />
        <LinkedinButton url={url} handleClick={this.handleClick} />
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
  twitterText: 'Wir versprechen:'
};

export default SocialMediaButtons;
