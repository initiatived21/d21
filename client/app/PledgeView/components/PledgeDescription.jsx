import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class PledgeDescription extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    const { children, className } = this.props

    let combinedClassName = 'c-pledge__description'
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <p className={combinedClassName}>
        {children}
      </p>
    )
  }
}
