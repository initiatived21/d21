import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class TwitterButton extends ChildComponent {
  render() {
    const { url, handleClick } = this.props

    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--twitter"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.t('.text'))}&url=${encodeURIComponent(url)}`}
          title={this.t('.title')}
          onClick={handleClick}
        >
          <FontAwesome name="twitter" />
        </a>
      </li>
    )
  }
}

TwitterButton.propTypes = {
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
