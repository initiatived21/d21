import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class Signee extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
  };

  render() {
    const { id, name, img_src, comment, created_at } = this.props;

    return (
      <li>
        <div className="o-media">
          <img className="o-media__img" src={img_src} width="50" height="50" alt={name} />
          <div className="o-media__body">
            <p>{name}</p>
            <p>{comment}</p>
            <p>{created_at}</p>
            {/* TODO: display id */}
          </div>
        </div>
      </li>
    );
  }
}
