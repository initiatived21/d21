import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import { FORMAT_DATE_AND_TIME } from '../../lib/config'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import CommentAvatar from '../../Avatar/components/CommentAvatar'

export default class Signee extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired,
    reason: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    anonymous: PropTypes.bool,
    organization: PropTypes.string,
    contact_person: PropTypes.bool
  }

  render() {
    const { id, name, img_src, reason, created_at, anonymous, organization,
      contact_person } = this.props

    const createdAtStr = I18n.strftime(
      new Date(Date.parse(created_at)), FORMAT_DATE_AND_TIME[I18n.locale]
    )

    let nameOrAnonymous
    if (anonymous) {
      nameOrAnonymous = this.t('.anonymous')
    }
    else {
      nameOrAnonymous = name

      if (organization) {
        nameOrAnonymous += `, ${organization}`
      }
      if (contact_person) {
        nameOrAnonymous += ` (${this.t('.contact_person')})`
      }
    }

    return (
      <li className="c-signee-list__item">
        <div className="o-media">
          <div className="c-signee-list__signee-img o-media__img">
            <CommentAvatar large />
            <span className="c-signee-list__signee-id">
              {id}
            </span>
          </div>
          <div className="c-signee-list__signee-data o-media__body">
            <h3 className="c-signee-list__signee-name">{nameOrAnonymous}</h3>
            <p className="c-signee-list__signee-comment">{reason}</p>
            <p className="c-signee-list__signee-date">{createdAtStr}</p>
          </div>
        </div>
      </li>
    )
  }
}
