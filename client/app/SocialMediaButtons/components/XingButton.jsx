import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class XingButton extends ChildComponent {
  render() {
    const { url, handleClick } = this.props

    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--xing"
          href={`https://www.xing.com/social_plugins/share?url=${encodeURIComponent(url)}`}
          title={this.t('.title')}
          onClick={handleClick}
        >
          <FontAwesome name="xing" />
        </a>
      </li>
    )
  }
}

XingButton.propTypes = {
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
