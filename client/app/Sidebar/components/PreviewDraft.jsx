import React, { PropTypes } from 'react'
import { FormButton } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import localPath from '../../lib/browser/localPath'

export default class PreviewDraft extends ChildComponent {
  static propTypes = {
    pledgeId: PropTypes.number.isRequired,
    activateAction: PropTypes.string.isRequired
  }

  render() {
    const { pledgeId, activateAction } = this.props

    return (
      <div className="c-preview c-preview--draft">
        <p>
          {this.t('.explanation')}
        </p>
        <p>
          {this.t('.legal.part1')}
          <a href={localPath('/terms')}>{this.t('.legal.terms')}</a>
          {this.t('.legal.part2')}
          <a href={localPath('/privacy')}>{this.t('.legal.privacy')}</a>
          {this.t('.legal.part3')}
        </p>

        <a className="o-btn c-btn c-btn--tertiary u-mt-small"
          href={localPath(`/pledges/${pledgeId}/edit`)}>
          <FontAwesome name="pencil" />
          {' '}
          {this.t('.edit_pledge')}
        </a>

        <FormButton
          className="o-btn c-btn c-btn--primary u-mt-small"
          action={activateAction}
          method='PATCH'
        >
          <FontAwesome name="thumbs-o-up" />
          {' '}
          {this.t('.submit_pledge')}
        </FormButton>
      </div>
    )
  }
}
