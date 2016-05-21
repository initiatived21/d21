import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeSocialMedia extends ChildComponent {
  static propTypes = {
  };

  render() {
    return (
      <p className="u-tc">
        Social Media Buttons
      </p>
    );
  }
}
