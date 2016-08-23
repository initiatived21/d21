import React, { PropTypes } from 'react'
import Tag from './Tag'

function TagList(props) {
  return (
    <ul className="c-tag-list o-list-inline">
      {props.tags.map(tag =>
        <Tag key={tag.id} name={tag.name} color={tag.color} />
      )}
    </ul>
  )
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagList
