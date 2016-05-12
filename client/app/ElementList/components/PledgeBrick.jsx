import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

export default class PledgeBrick extends ChildComponent {
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

  render() {
    const { pledge } = this.props

    return (
      <div className='o-layout__item u-1/2@m u-1/3@l'>
        <article className='c-pledge-tile o-box o-box--small'>
          <header className='PledgeBrick-Initiator'>
            <h3>Initiator</h3>
          </header>
          <main className='PledgeBrick-Pledge'>
            <a href="/{I18n.locale}/pledges/{pledge.id}">
              Wir versprechen, {pledge.content}, wenn {pledge.amount}
              {pledge.who} {pledge.requirement}.
            </a>
            <p>{pledge.deadline}</p>
            <p>
              {pledge.signatures_count} von {pledge.amount} Unterzeichnern
            </p>
          </main>
          <footer className='PledgeBrick-Footer'>
            [Share Buttons]
          </footer>
        </article>
      </div>
    )
  }
};
