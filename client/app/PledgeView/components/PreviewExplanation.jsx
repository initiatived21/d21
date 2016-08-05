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
            className="o-btn o-btn--small c-btn c-btn--primary u-mt-small"
            action={activateAction}
            method='PATCH'
          >
            <FontAwesome name="thumbs-o-up" />
            {' '}
            Click here to submit it for approval
          </ButtonFor>
        )
      } else {
        statusInfo = 'Please confirm your email to finalize this pledge.'
      }
    } else {
      statusInfo = 'It is being reviewed.'
    }

    return (
      <div className="PreviewExplanation">
        This is a preview of your pledge.
        {statusInfo}
      </div>
    )
  }
}


