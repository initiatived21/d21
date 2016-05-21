import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeInitiator extends ChildComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name } = this.props;

    return (
      <div className="o-media">
        <img className="o-media__img" src="" width="100" height="100" alt="" />
        <div className="o-media__body">
          <p className="c-pledge__initiator-title">Initiator</p>
          <p className="c-pledge__initiator-name">{name}</p>
        </div>
      </div>
    );
  }
}
