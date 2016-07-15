import React, { PropTypes } from 'react';
import I18n from 'i18n-js';

import ChildComponent from '../../lib/Base/components/ChildComponent.js';
import FacebookButton from './FacebookButton.jsx';
import TwitterButton from './TwitterButton.jsx';
import GoogleplusButton from './GoogleplusButton.jsx';
import XingButton from './XingButton.jsx';
import LinkedinButton from './LinkedinButton.jsx';

export default class SocialMediaButtons extends ChildComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const anchor = e.currentTarget;
    this.openWindow(anchor.href);
  }

  openWindow(url) {
    const windowName = '_blank';
    const windowSizeX = '600';
    const windowSizeY = '460';
    const windowSize = `width=${windowSizeX},height=${windowSizeY}`;
    global.window.open(url, windowName, windowSize);
  }

  render() {
    const { url } = this.props;
    const commonProps = {
      url,
      handleClick: this.handleClick
    };

    return (
      <ul className="c-social-media o-list-inline">
        <FacebookButton {...commonProps} />
        <TwitterButton {...commonProps} />
        <GoogleplusButton {...commonProps} />
        <XingButton {...commonProps} />
        <LinkedinButton {...commonProps} />
      </ul>
    );
  }
}

SocialMediaButtons.propTypes = {
  url: PropTypes.string.isRequired
};
