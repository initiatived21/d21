import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import { FORMAT_DATE_AND_TIME } from '../../lib/config'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

export default class PledgeCreatedAt extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render() {
    const { children } = this.props

    const createdAtStr = I18n.strftime(
      new Date(Date.parse(children)), FORMAT_DATE_AND_TIME[I18n.locale]
    )

    return (
      <p className="c-pledge__created-at u-mt-small">
        {this.t('.published_on')}
        {' '}
        {createdAtStr}
      </p>
    )
  }
}
