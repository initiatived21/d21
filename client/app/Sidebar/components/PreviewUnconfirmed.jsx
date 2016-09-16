import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import localPath from '../../lib/browser/localPath'

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
          href={localPath(`/pledges/${pledgeId}/edit`)}>
          <FontAwesome name="pencil" />
          {' '}
          {this.t('.edit_pledge')}
        </a>
      </div>
    )
  }
}

