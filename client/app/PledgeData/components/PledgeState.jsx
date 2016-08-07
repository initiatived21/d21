import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class PledgeState extends ChildComponent {
  static propTypes = {
    state: PropTypes.string.isRequired,
    remainingDays: PropTypes.number.isRequired,
    urgent: PropTypes.bool
  }

  render() {
    const { state, remainingDays, urgent } = this.props
    const className = `c-pledge-state${urgent ? ' c-pledge-state--urgent' : ''}`

    let stateElement = null

    switch(state) {
    case 'successful':
      stateElement = (
        <p className={`${className} c-pledge-state--successful`}>
          <FontAwesome className="c-pledge-state__check" name="check" />
        </p>
      )
      break
    case 'failed':
      stateElement = (
        <p className={`${className} c-pledge-state--failed`}>
          <FontAwesome className="c-pledge-state__x" name="times" />
        </p>
      )
      break
    case 'disapproved':
      stateElement = (
        <p className={`${className} c-pledge-state--disapproved`}>
          <FontAwesome className="c-pledge-state__thumbs-down" name="thumbs-down" />
        </p>
      )
      break
    case 'initialized':
    case 'requested':
    case 'active':
    default:
      stateElement = (
        <p className={className}>
          <span className="c-pledge-state__still">{this.t('.still')}</span>
          <br />
          <span className="c-pledge-state__number-of-days">{remainingDays}</span>
          <br />
          <span className="c-pledge-state__days">{this.t('.days', { count: remainingDays })}</span>
        </p>
      )
    }

    return stateElement
  }
}
