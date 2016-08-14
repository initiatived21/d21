import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import ButtonFor from '../../lib/Form/containers/ButtonFor'

export default class PreviewExplanation extends ChildComponent {
  static propTypes = {
    isDraft: PropTypes.bool.isRequired,
    activateAction: PropTypes.string.isRequired,
  }

  render() {
    const { isDraft, activateAction, userConfirmed } = this.props

    let statusInfo
    if (isDraft) {
      if (userConfirmed) {
        statusInfo = (
          <ButtonFor
            className="o-btn o-btn--small o-btn--full c-btn c-btn--primary u-mt-small"
            action={activateAction}
            method='PATCH'
          >
            <FontAwesome name="thumbs-o-up" />
            {' '}
            {this.t('.status.submit_for_approval')}
          </ButtonFor>
        )
      } else {
        statusInfo = this.t('.status.confirm_email')
      }
    } else {
      statusInfo = this.t('.status.reviewed')
    }

    return (
      <div className="c-sidebar c-sidebar--tertiary">
        <h2 className="c-sidebar__title">
          {this.t('.title')}
        </h2>

        <div className="c-sidebar__wrapper">
          {this.t('.preview')}

          {statusInfo}
        </div>
      </div>
    )
  }
}
