import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import PledgeUpdate from './PledgeUpdate';

export default class PledgeUpdates extends ChildComponent {
  static propTypes = {
  };

  render() {
    const { children } = this.props;

    return (
      <section>
        <h3>Neuigkeiten</h3>
        <ol className="o-list-bare">
          <PledgeUpdate created_at='2016-09-01T12:05:22.964Z'>
            Die Laptops wurden abgeholt.
          </PledgeUpdate>
        </ol>
      </section>
    );
  }
}
