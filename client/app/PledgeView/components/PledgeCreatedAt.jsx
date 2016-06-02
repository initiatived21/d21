import React, { PropTypes } from 'react';
import I18n from 'i18n-js';
import pad from 'pad-number';
import ChildComponent from '../../lib/Base/components/ChildComponent.js';

export default class PledgeCreatedAt extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  };

  getDateString() {
    const date = new Date(this.props.children);

    return `${pad(date.getDate(), 2)}.${pad((date.getMonth() + 1), 2)}.${date.getFullYear()}`;
  }

  getTimeString() {
    const date = new Date(this.props.children);

    return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)} Uhr`;
  }

  render() {
    const { children } = this.props;

    return (
      <p className="c-pledge__created-at">
        Veröffentlicht am {this.getDateString()} um {this.getTimeString()}
      </p>
    );
  }
}
