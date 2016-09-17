import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class GetMoreResultsButton extends ChildComponent {
  static propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
  }

  render() {
    const { children, disabled, clickHandler } = this.props

    let className = 'o-btn c-btn'
    if (disabled) {
      className += ' c-btn--disabled'
    }
    else {
      className += ' c-btn--primary'
    }

    return (
      <button type="submit" className={className} disabled={disabled} onClick={clickHandler} >
        {children}
      </button>
    )
  }
}
