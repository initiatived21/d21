import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import { FORMAT_DATE_AND_TIME } from '../../lib/config'

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

    const createdAtStr = I18n.strftime(
      new Date(Date.parse(created_at)), FORMAT_DATE_AND_TIME[I18n.locale]
    )

    return (
      <li className="c-update-list__item o-layout o-layout--small">
        <div className="o-layout__item u-4/5">
          <p className="c-update-list__item-text">
            {content}
          </p>
        </div>
        <div className="o-layout__item u-1/5">
          <p className="c-update-list__item-date">
            <i>{createdAtStr}</i>
          </p>
        </div>
      </li>
    )
  }
}
