import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class MenuItem extends ChildComponent {
  render() {
    let className='c-menu__item'
    if (this.props.active) {
      className += ' c-menu__item--active'
    }

    return (
      <a className={className} href="" onClick={this.props.handleClick}>
        {this.props.children}
      </a>
    )
  }
}
