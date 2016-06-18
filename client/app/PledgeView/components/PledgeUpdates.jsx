import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import PledgeUpdate from './PledgeUpdate';

export default class PledgeUpdates extends ChildComponent {
  static propTypes = {
    updates: PropTypes.array.isRequired,
  };

  render() {
    const { updates } = this.props;

    return (
      <section className="o-layout__item">
        <h3>{this.t('.heading')}</h3>
        <ol className="o-list-bare">
          {updates.map( update =>
            <PledgeUpdate key={update.id} update={update} />
          )}
        </ol>
      </section>
    );
  }
}
