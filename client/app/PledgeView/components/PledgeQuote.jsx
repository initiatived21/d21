import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeQuote extends ChildComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
  };

  render() {
    const { content, amount, who, requirement } = this.props;

    return (
      <div className="o-media">
        <img className="o-media__img" src="cornelsen.png" width="100" height="100" alt="Cornelsen Logo" />
        <figure className="o-media__body">
          <blockquote className="c-pledge__text">
            Wir versprechen, {content}, wenn mindestens {amount} {who} {requirement}.
          </blockquote>
          <figcaption>{'Cornelsen Verlag'}</figcaption>
        </figure>
      </div>
    );
  }
}
