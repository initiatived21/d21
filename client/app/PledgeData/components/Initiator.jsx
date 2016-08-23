import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class Initiator extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  };

  render() {
    const { children } = this.props

    return (
      <div className="c-initiator c-initiator--wo-image">
        <p className="c-initiator__title">Initiator</p>
        <p className="c-initiator__name">{children}</p>
      </div>
    )
  }
}
