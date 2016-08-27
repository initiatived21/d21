import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class PledgeText extends ChildComponent {
  static propTypes = {
    content:     PropTypes.string.isRequired,
    amount:      PropTypes.number.isRequired,
    who:         PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired
  };

  render() {
    const { content, amount, who, requirement } = this.props

    return (
      <p className="c-pledge-tile__text">
        <q>
          Wir versprechen, {content}, wenn {amount} {who} {requirement}.
        </q>
      </p>
    )
  }
}
