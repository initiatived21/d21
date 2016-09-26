import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class PledgeImage extends ChildComponent {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  render() {
    const { src } = this.props

    return (
      <img
        className="c-pledge__image"
        src={src}
        alt={this.t('.img_alt')}
      />
    )
  }
}
