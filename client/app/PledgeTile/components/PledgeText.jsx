import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class PledgeText extends ChildComponent {
  static propTypes = {
    content:     PropTypes.string.isRequired,
    amount:      PropTypes.number.isRequired,
    who:         PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    locale:      PropTypes.string.isRequired,
  }

  render() {
    const { content, amount, who, requirement, locale } = this.props

    return (
      <p className="c-pledge-tile__text">
        <q>
          {this.t('.sentence', {content, amount, who, requirement, locale})}
        </q>
      </p>
    )
  }
}
