import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class PledgeTile extends ChildComponent {
  static propTypes = {
    pledge: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      who: PropTypes.string.isRequired,
      requirement: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      signatures_count: PropTypes.number.isRequired,
      aasm_state: PropTypes.string.isRequired
    })
  };

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.pledge.id}`;
  }

  // rough-and-ready version
  // among other things, should update itself at 0:00 o'clock
  getRemainingDays() {
    const pledge_date = Date.parse(this.props.pledge.deadline);
    const now = Date.now();

    return Math.floor((pledge_date - now)/1000/60/60/24).toString();
  }

  render() {
    const { pledge } = this.props;

    return (
      <article className="c-pledge-tile o-box o-box--small">
        <a className="c-pledge-tile__link" href={this.getPledgePath()}></a>
        <p className="c-pledge-tile__initiator-title">
          Initiator
        </p>
        <p className="c-pledge-tile__initiator-name">
          Max Mustermann
        </p>
        <p className="c-pledge-tile__text">
          Wir versprechen, {pledge.content}, wenn {pledge.amount}
          {' '}
          {pledge.who} {pledge.requirement}.
        </p>
        <p className="c-pledge-tile__days u-tc">
          {this.getRemainingDays()} Tage
        </p>
        <p className="c-pledge-tile__signees u-tc">
          {pledge.signatures_count} von {pledge.amount} Unterzeichnern
        </p>
      </article>
    )
  }
};
