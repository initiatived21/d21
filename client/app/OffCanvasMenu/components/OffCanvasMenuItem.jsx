import React, { PropTypes } from 'react'

export default class OffCanvasMenuItem extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    external: PropTypes.bool,
    active: PropTypes.bool,
  }

  render() {
    const { href, children, handleClick, external, active } = this.props

    let className='c-off-canvas-menu__item'
    if (active) {
      className += ' c-off-canvas-menu__item--active'
    }

    return (
      <li className={className}>
        <a className="c-off-canvas-menu__link" href={href} onClick={handleClick}
          target={ external ? '_blank' : null }>
          {children}
        </a>
      </li>
    )
  }
}
