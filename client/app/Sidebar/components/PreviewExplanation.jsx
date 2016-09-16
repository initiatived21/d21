import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import PreviewDraft from './PreviewDraft'
import PreviewUnconfirmed from './PreviewUnconfirmed'
import PreviewRequested from './PreviewRequested'

export default class PreviewExplanation extends ChildComponent {
  static propTypes = {
    pledgeId: PropTypes.number.isRequired,
    isDraft: PropTypes.bool.isRequired,
    activateAction: PropTypes.string.isRequired,
    userConfirmed: PropTypes.bool
  }

  render() {
    const { pledgeId, isDraft, activateAction, userConfirmed } = this.props

    let statusInfo
    if (isDraft) {
      if (userConfirmed) {
        statusInfo = <PreviewDraft pledgeId={pledgeId} activateAction={activateAction} />
      } else {
        statusInfo = <PreviewUnconfirmed pledgeId={pledgeId} />
      }
    } else {
      statusInfo = <PreviewRequested />
    }

    return (
      <div className="c-sidebar c-sidebar--tertiary">
        <h2 className="c-sidebar__title">
          {this.t('.title')}
        </h2>

        <div className="c-sidebar__wrapper">
          {statusInfo}
        </div>
      </div>
    )
  }
}
