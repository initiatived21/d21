import React, { PropTypes } from 'react'
import FontAwesome          from 'react-fontawesome'
import { FormButton }       from 'rform'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import localPath            from '../../lib/browser/localPath'

export default class StateFooter extends ChildComponent {
  static propTypes = {
    pledgeId: PropTypes.number.isRequired,
    showEditButton: PropTypes.bool,
    showDeleteButton: PropTypes.bool,
    showRequestButton: PropTypes.bool,
    deleteConfirmationMessage: PropTypes.string,
  }

  render() {
    const { pledgeId, showEditButton, showDeleteButton, showRequestButton,
      deleteConfirmationMessage } = this.props

    console.log('showRequestButton', showRequestButton)

    const editButton = showEditButton ? (
      <a className="o-btn c-btn c-btn--tertiary c-btn--tiny"
        href={localPath(`/pledges/${pledgeId}/edit`)}>
        {this.t('.edit')}
      </a>
    ) : null

    const deleteButton = showDeleteButton ? (
      <FormButton
        className="o-btn c-btn c-btn--secondary c-btn--tiny"
        action={localPath(`/pledges/${pledgeId}`)}
        method="DELETE"
        confirm={deleteConfirmationMessage}
        >
        {this.t('.delete')}
      </FormButton>
    ) : null

    const requestButton = showRequestButton ? (
      <FormButton
        className="o-btn c-btn c-btn--primary c-btn--tiny"
        action={localPath(`/pledges/${pledgeId}/finalize`)}
        method='PATCH'
      >
        {this.t('.submit')}
      </FormButton>
    ) : null

    return (
      <div className="c-pledge-tile__state-footer">
        {editButton}
        {' '}
        {deleteButton}
        {' '}
        {requestButton}
      </div>
    )
  }
}

