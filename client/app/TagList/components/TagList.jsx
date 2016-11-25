import React, { PropTypes } from 'react'
import Tag from './Tag'

function TagList({tags, summary}) {
  const tagList = summary ? tags.slice(0, 3) : tags
  const showEllipsis = summary && tags.length > tagList.length
  const ellipsis = showEllipsis ? (
    <span className="c-tag-list__ellipsis">…</span>
  ) : null

  return (
    <ul className={`o-list-inline c-tag-list${ summary ? ' c-tag-list--summary' : ''}`}>
      {tagList.map(tag =>
        <Tag key={tag.id} name={tag.name} color={tag.color} />
      )}
      {ellipsis}
    </ul>
  )
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
  summary: PropTypes.bool,
}

export default TagList
