import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeAnswer extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <dd>{children}</dd>
    );
  }
}
