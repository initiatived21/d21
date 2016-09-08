import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import formatDateAndTime from '../../lib/date_and_time/formatDateAndTime'

export default class PledgeUpdate extends ChildComponent {
  static propTypes = {
    update: PropTypes.shape({
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { update } = this.props
    const { content, created_at } = update

    const createdAtStr = formatDateAndTime(created_at)

    return (
      <li className="c-update-list__item o-layout o-layout--small">
        <div className="o-layout__item u-4/5@m">
          <p className="c-update-list__item-text">
            {content}
          </p>
        </div>
        <div className="o-layout__item u-1/5@m">
          <p className="c-update-list__item-date">
            <i>{createdAtStr}</i>
          </p>
        </div>
      </li>
    )
  }
}
