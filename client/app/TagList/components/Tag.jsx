import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class Tag extends ChildComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  render() {
    const { name, color } = this.props

    return (
      <li
        className="c-tag-list__item"
        style={{backgroundColor: `#${color}`}}
      >
        {this.t(`tags.names.${name}`)}
      </li>
    )
  }
}
