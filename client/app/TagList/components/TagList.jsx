import React, { PropTypes } from 'react'
import Tag from './Tag'

function TagList(props) {
  // Omitting key prop here on purpose because the component does not have state.
  return (
    <ul className="c-tag-list o-list-inline">
      {props.tags.map(tag =>
        <Tag key={tag.id} tag={tag} />
      )}
    </ul>
  )
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagList
