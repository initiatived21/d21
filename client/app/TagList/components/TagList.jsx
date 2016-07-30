import React, { PropTypes } from 'react';
import Tag from './Tag';

function TagList(props) {
  // Omitting key prop here on purpose because the component does not have state.
  return (
    <ul className="c-tag-list o-list-inline">
      {props.names.map( (name) =>
        <Tag key={name}>{name}</Tag>
      )}
    </ul>
  );
}

TagList.propTypes = {
  names: PropTypes.array.isRequired
};

export default TagList;
