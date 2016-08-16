import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class Tag extends ChildComponent {
  static propTypes = {
    tag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  }

  render() {
    const { tag } = this.props

    return (
      <li
        className="c-tag-list__item"
        style={{backgroundColor: `#${tag.color}`}}
      >
        {this.t(`tags.names.${tag.name}`)}
      </li>
    )
  }
}
