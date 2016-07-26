import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import Avatar from '../../Avatar/components/Avatar'

export default class InitiatorWithImage extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    imagePath: PropTypes.string
  };

  render() {
    const { children, imagePath } = this.props;

    return (
      <div className="c-initiator c-initiator--with-image o-media u-mt u-mb-small">
        <Avatar className="c-initiator__img o-media__img" name={children} imagePath={imagePath} />
        <div className="o-media__body">
          <p className="c-initiator__title u-mt-small">Initiator</p>
          <p className="c-initiator__name">{children}</p>
        </div>
      </div>
    );
  }
}
