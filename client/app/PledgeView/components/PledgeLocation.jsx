import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class PledgeLocation extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <p className="c-pledge__location u-mt-small">
        {this.t('.title')}: {children}
      </p>
    )
  }
}
