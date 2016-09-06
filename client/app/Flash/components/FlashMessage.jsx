import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

export default class FlashMessage extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    removed: PropTypes.bool.isRequired,
    onExpire: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    const { onExpire } = this.props

    setTimeout(function() {
      onExpire()
    }, 5000)
  }

  render() {
    const { id, type, text, removed } = this.props

    let className = `c-flash-list__item c-flash-list__item--${type}`
    if (removed) { className += ' c-flash-list__item--removed' }

    let awesomeName
    switch(type) {
    case 'notice':
    case 'success':
      awesomeName = 'check'
      break
    case 'alert':
    case 'error':
    default:
      awesomeName = 'exclamation-triangle'
    }

    return (
      <li className={className}>
        <FontAwesome className="c-flash-list__icon" name={awesomeName} />
        <p className="c-flash-list__text">
          {text}
        </p>
      </li>
    )
  }
}
