import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class GoogleplusButton extends ChildComponent {
  render() {
    const { url, handleClick } = this.props

    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--googleplus"
          href={`https://plus.google.com/share?url=${encodeURIComponent(url)}`}
          title={this.t('.title')}
          onClick={handleClick}
        >
          <FontAwesome name="google-plus" />
        </a>
      </li>
    )
  }
}

GoogleplusButton.propTypes = {
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
