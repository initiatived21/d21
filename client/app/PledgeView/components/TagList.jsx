import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';
import Tag                  from './Tag';

export default class TagList extends ChildComponent {
  static propTypes = {
    names: PropTypes.array.isRequired
  };

  render() {
    const { names } = this.props;

    return (
      <ul className="c-tag-list o-list-inline">
        {names.map( (name) =>
          <Tag key={name} name={name} />
        )}
      </ul>
    );
  }
}
