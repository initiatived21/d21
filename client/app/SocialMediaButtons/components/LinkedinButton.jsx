import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class LinkedinButton extends ChildComponent {
  render() {
    const { url, handleClick } = this.props

    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--linkedin"
          href={`https://www.linkedin.com/cws/share?url=${encodeURIComponent(url)}`}
          title={this.t('.title')}
          onClick={handleClick}
        >
          <FontAwesome name="linkedin" />
        </a>
      </li>
    )
  }
}

LinkedinButton.propTypes = {
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
