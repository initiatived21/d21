import React, { PropTypes } from 'react'
import formatDateAndTime from '../../lib/date_and_time/formatDateAndTime'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class PledgeCreatedAt extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render() {
    const { children } = this.props
    const createdAtStr = formatDateAndTime(children)

    return (
      <p className="c-pledge__created-at">
        {this.t('.published_on')}
        {' '}
        {createdAtStr}
      </p>
    )
  }
}
