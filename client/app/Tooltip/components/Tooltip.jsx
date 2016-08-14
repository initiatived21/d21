import React, { PropTypes } from 'react'
import onClickOutside from 'react-onclickoutside'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

class Tooltip extends ChildComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
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

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClickOutside() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { children, className } = this.props
    const { isOpen } = this.state

    let combinedClassName = `c-tooltip${isOpen ? ' c-tooltip--open' : ''}`
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <aside className={combinedClassName}>
        <a href="#" className="c-tooltip__anchor" onClick={this.handleClick}>
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
