import React, { PropTypes } from 'react'
import onClickOutside from 'react-onclickoutside'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import { TOOLTIP_WIDTH } from '../../lib/config'

class Tooltip extends ChildComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      displayLeft: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.hide = this.hide.bind(this)
    this.toolTipWouldBeTruncated = this.toolTipWouldBeTruncated.bind(this)
  }

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    className: PropTypes.string
  }

  handleClick(event) {
    event.preventDefault()

    if (this.state.isOpen) {
      this.hide()
    }
    else {
      this.setState({
        isOpen: true,
        displayLeft: this.toolTipWouldBeTruncated()
      })
    }
  }

  handleClickOutside() {
    this.hide()
  }

  hide() {
    this.setState({
      isOpen: false,
      displayLeft: false
    })
  }

  toolTipWouldBeTruncated() {
    const anchorElement = this._anchor
    const anchorCoords = anchorElement.getBoundingClientRect()
    const middle = anchorCoords.right - (anchorCoords.width / 2)
    const wouldBeTruncated = document.documentElement.clientWidth - middle < (TOOLTIP_WIDTH / 2 + 5)
    return wouldBeTruncated
  }

  render() {
    const { children, className } = this.props
    const { isOpen, displayLeft } = this.state

    let combinedClassName = `c-tooltip${isOpen ? ' c-tooltip--open' : ''}`
    if (displayLeft) {
      combinedClassName += ' c-tooltip--left'
    }
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <aside className={combinedClassName}>
        <a href="#" className="c-tooltip__anchor" onClick={this.handleClick}
          ref={(c) => this._anchor = c}>
          <FontAwesome name="question-circle" />
        </a>
        <p className="c-tooltip__text o-box--small">
          {children}
        </p>
        <svg className="c-tooltip__triangle" width="36" height="18" viewBox="0 0 36 17"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
            <polygon points="0,0 36,0 18,17" />
        </svg>
      </aside>
    )
  }
}

export default onClickOutside(Tooltip)
