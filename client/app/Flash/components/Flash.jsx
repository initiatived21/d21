import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import { TRANSITION_TIME, FLASH_DISPLAY_TIME } from '../../lib/config'
import RootComponent from '../../lib/Base/components/RootComponent'

export default class Flash extends RootComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      isRemoved: false
    }
  }

  componentDidMount() {
    const self = this
    const duration = this.props.type === 'notice' ? FLASH_DISPLAY_TIME : FLASH_DISPLAY_TIME * 2

    setTimeout(function() {
      self.setState({
        isHidden: false
      })
      setTimeout(function() {
        self.setState({
          isHidden: true
        })
        setTimeout(function() {
          self.setState({
            isRemoved: true
          })
        }, TRANSITION_TIME)
      }, duration)
    }, 50)
  }

  render() {
    const { content, type } = this.props
    const { isHidden, isRemoved } = this.state

    let className = `c-flash c-flash--${type}`
    if (isHidden) { className += ' c-flash--hidden' }
    if (isRemoved) { className += ' c-flash--removed' }

    let awesomeName
    switch(type) {
    case 'notice':
      awesomeName = 'check'
      break
    case 'alert':
    case 'error':
    default:
      awesomeName = 'exclamation-triangle'
    }

    return (
      <div className={className}>
        <div className="c-flash__inner">
          <FontAwesome className="c-flash__icon" name={awesomeName} />
          <p className="c-flash__content">
            {content}
          </p>
        </div>
      </div>
    )
  }
}
