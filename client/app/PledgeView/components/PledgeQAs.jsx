import React, { PropTypes } from 'react';
import I18n from 'i18n-js';
import ChildComponent from '../../lib/Base/components/ChildComponent.js';
import PledgeQuestion from './PledgeQuestion';
import PledgeAnswer from './PledgeAnswer';

export default class PledgeQAs extends ChildComponent {
  static propTypes = {
  };

  render() {
    const { children } = this.props;

    return (
      <section>
        <h3>Fragen und Antworten an den Initiator</h3>
        <dl>
          <PledgeQuestion>Um welche Laptops handelt es sich?</PledgeQuestion>
          <PledgeAnswer>Es sind Lenovo-Laptops.</PledgeAnswer>
        </dl>
      </section>
    );
  }
}
