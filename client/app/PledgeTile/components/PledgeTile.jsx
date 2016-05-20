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

    return Math.floor((pledge_date - now)/1000/60/60/24);
  }

  render() {
    const { pledge } = this.props;

    return (
      <div className="o-layout__item u-1/2@m u-1/3@l">
        <article className="c-pledge-tile">
          <a className="c-pledge-tile__link o-box o-box--small"
             href={this.getPledgePath()}>
            <PledgeTagList names={['Familie', 'Frauen', 'Kinder']} />
            <PledgeInitiator name="Max Mustermann" />
            <PledgeText
              content={pledge.content}
              amount={pledge.amount}
              who={pledge.who}
              requirement={pledge.requirement}
            />
            <PledgeDaysRemaining days={this.getRemainingDays()} />
            <PledgeProgress
              amount={pledge.amount}
              signatures_count={pledge.signatures_count}
            />
          </a>
        </article>
      </div>
    )
  }
};

export class PledgeTag extends ChildComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name } = this.props;

    return (
      <li className="c-tag-list__item">
        {name}
      </li>
    );
  }
}

export class PledgeTagList extends ChildComponent {
  static propTypes = {
    names: PropTypes.array.isRequired
  };

  render() {
    const { names } = this.props;

    return (
      <ul className="c-tag-list o-list-inline">
        {names.map( (name) =>
          <PledgeTag key={name} name={name} />
        )}
      </ul>
    );
  }
}

export class PledgeInitiator extends ChildComponent {
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

export class PledgeText extends ChildComponent {
  static propTypes = {
    content:     PropTypes.string.isRequired,
    amount:      PropTypes.number.isRequired,
    who:         PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired
  };

  render() {
    const { content, amount, who, requirement } = this.props;

    return (
      <p className="c-pledge-tile__text">
        Wir versprechen, {content}, wenn mindestens {amount} {who} {requirement}.
      </p>
    );
  }
}

export class PledgeDaysRemaining extends ChildComponent {
  static propTypes = {
    days: PropTypes.number.isRequired
  };

  pluralized_days() {
    if (this.props.days === 1) {
      return 'Tag';
    }
    else {
      return 'Tage';
    }
  }

  render() {
    const { days } = this.props;

    return (
      <p className="c-pledge-tile__days u-tc">
        Noch {days} {this.pluralized_days()}
      </p>
    );
  }
}

export class PledgeProgress extends ChildComponent {
  static propTypes = {
    amount:           PropTypes.number.isRequired,
    signatures_count: PropTypes.number.isRequired
  };

  render() {
    const { amount, signatures_count } = this.props;

    return (
      <p className="c-pledge-tile__signees u-tc">
        {signatures_count} von {amount} Unterzeichnern
      </p>
    );
  }
}
