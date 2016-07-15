import React, { PropTypes } from 'react';

function Tag(props) {
  return (
    <li className="c-tag-list__item">
      {props.children}
    </li>
  );
}

Tag.propTypes = {
  children: PropTypes.string.isRequired
};

export default Tag;
