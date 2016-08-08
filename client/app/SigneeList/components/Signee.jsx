import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import { FORMAT_DATE_AND_TIME } from '../../lib/config'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class Signee extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired,
    reason: PropTypes.string,
    created_at: PropTypes.string.isRequired
  }

  render() {
    const { id, name, img_src, reason, created_at } = this.props

    const createdAtStr = I18n.strftime(
      new Date(Date.parse(created_at)), FORMAT_DATE_AND_TIME[I18n.locale]
    )

    return (
      <li className="c-signee-list__item">
        <div className="o-media">
          <img className="c-signee-list__signee-img o-media__img" src={img_src} width="89" height="89" alt={name} />
          <div className="c-signee-list__signee-data o-media__body">
            <h3 className="c-signee-list__signee-name">{name}</h3>
            <p className="c-signee-list__signee-comment">{reason}</p>
            <p className="c-signee-list__signee-date">{createdAtStr}</p>
            {/* TODO: display id */}
          </div>
        </div>
      </li>
    )
  }
}
