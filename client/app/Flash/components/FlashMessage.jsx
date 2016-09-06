import React, { PropTypes } from 'react'

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

    return (
      <li className={`c-flash-list__item${removed ? ' c-flash-list__item--removed' : ''}`}>
        {text}
      </li>
    )
  }
}
