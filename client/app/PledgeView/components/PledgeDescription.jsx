import React, { PropTypes } from 'react';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeDescription extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <p className="c-pledge__description">
        {children}
      </p>
    );
  }
}
