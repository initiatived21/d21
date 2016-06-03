import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeUpdate extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
  };

  render() {
    const { children, created_at } = this.props;

    return (
      <li>
        <p>{children}</p>
        <p>{created_at}</p>
      </li>
    );
  }
}
