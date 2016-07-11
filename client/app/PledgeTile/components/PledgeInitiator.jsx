import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import { DUMMY_IMAGE_PATH } from '../../lib/config';

export default class PledgeInitiator extends ChildComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name } = this.props;

    return (
      <div className="o-media u-mt-small u-mb-small">
        <img className="c-pledge-tile__initiator-img o-media__img" src={`${DUMMY_IMAGE_PATH}/schwesig.jpg`} width="89" height="89" alt="" />
        <div className="o-media__body">
          <p className="c-pledge-tile__initiator-title u-mt-small">Initiator</p>
          <p className="c-pledge-tile__initiator-name">{name}</p>
        </div>
      </div>
    );
  }
}
