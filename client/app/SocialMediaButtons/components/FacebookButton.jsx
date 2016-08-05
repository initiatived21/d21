import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class FacebookButton extends ChildComponent {
  render() {
    const { url, handleClick } = this.props

    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          title={this.t('.title')}
          onClick={handleClick}
        >
          <FontAwesome name="facebook" />
        </a>
      </li>
    )
  }
}

FacebookButton.propTypes = {
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
