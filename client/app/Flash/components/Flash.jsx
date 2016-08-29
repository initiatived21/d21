import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
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
    const duration = this.props.type === 'notice' ? 2500 : 5000

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
        }, 250)
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
        <div className="c-flash__inner o-flag">
          <div className="o-flag__img">
            <FontAwesome className="c-flash__icon" name={awesomeName} />
          </div>
          <div className="o-flag__body">
            <p className="c-flash__content">
              {content}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
