import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import { FormButton } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class PreviewUnconfirmed extends ChildComponent {
  static propTypes = {
    pledgeId: PropTypes.number.isRequired,
  }

  render() {
    const { pledgeId } = this.props

    return (
      <div className="c-preview c-preview--unconfirmed">
        <p>{this.t('.confirm_email')}</p>

        <a className="o-btn c-btn c-btn--tertiary u-mt-small"
          href={I18n.t('paths.edit_pledge', { pledge: pledgeId })}>
          <FontAwesome name="pencil" />
          {' '}
          {this.t('.edit_pledge')}
        </a>
      </div>
    )
  }
}
