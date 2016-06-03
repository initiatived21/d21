import React, { PropTypes } from 'react';
import I18n from 'i18n-js';
import ChildComponent from '../../lib/Base/components/ChildComponent.js';
import Signee from './Signee';

export default class SigneeList extends ChildComponent {
  static propTypes = {
  };

  render() {
    const { children } = this.props;

    return (
      <section className="o-layout__item">
        <h3>Unterzeichner</h3>
        <ol className="o-list-bare">
          <Signee
            id={1}
            name="Max Mustermann"
            comment="Tolle Initiative!"
            img_src="/images/max_mustermann.jpg"
            created_at="2016-09-01T12:05:22.964Z"
          />
        </ol>
      </section>
    );
  }
}
