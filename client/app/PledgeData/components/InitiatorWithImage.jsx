import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import { DUMMY_IMAGE_PATH } from '../../lib/config';

export default class InitiatorWithImage extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="c-initiator c-initiator--with-image o-media u-mt u-mb-small">
        <img className="c-initiator__img o-media__img" src={`${DUMMY_IMAGE_PATH}/schwesig.jpg`} width="89" height="89" alt="" />
        <div className="o-media__body">
          <p className="c-initiator__title u-mt-small">Initiator</p>
          <p className="c-initiator__name">{children}</p>
        </div>
      </div>
    );
  }
}
