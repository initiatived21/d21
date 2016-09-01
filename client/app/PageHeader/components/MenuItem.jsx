import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class MenuItem extends ChildComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    external: PropTypes.bool,
    active: PropTypes.bool,
  }

  render() {
    const { href, children, handleClick, external, active } = this.props

    let className='c-menu__item'
    if (active) {
      className += ' c-menu__item--active'
    }

    return (
      <a className={className} href={href} onClick={handleClick}
        target={ external ? '_blank' : null }>
        {children}
      </a>
    )
  }
}
