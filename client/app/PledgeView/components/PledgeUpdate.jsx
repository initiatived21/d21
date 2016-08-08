import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'

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

    return (
      <li>
        <p>{content}</p>
        <p>{created_at}</p>
      </li>
    )
  }
}
