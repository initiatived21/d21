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
    this.state = { hidden: false }
  }

  componentDidMount() {
    const self = this

    setTimeout(function() {
      self.setState({
        hidden: false
      })
    }, 3000)
  }

  render() {
    const { content, type } = this.props
    const { hidden } = this.state

    let className = `c-flash c-flash--${type}`
    if (hidden) { className += ' c-flash--hidden' }

    return (
      <div className={className}>
        <div className="o-flag">
          <div className="o-flag__img">
            <FontAwesome className="c-flash__icon" name="check" />
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
