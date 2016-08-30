import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class PrimaryNavItem extends ChildComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    active: PropTypes.bool,
    external: PropTypes.bool
  }

  render() {
    const { href, children, active, external } = this.props

    let className = 'c-primary-nav__link'
    if (active) { className += ' c-primary-nav__link--active' }

    return (
      <li>
        <a className={className} href={href} target={external ? '_blank' : null}>
          {children}
        </a>
      </li>
    )
  }
}
