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
  }

  render() {
    const { pledgeId, showEditButton, showDeleteButton } = this.props

    const editButton = showEditButton ? (
      <a className="o-btn c-btn c-btn--tertiary u-mt-small"
        href={localPath(`/pledges/${pledgeId}/edit`)}>
        <FontAwesome name="pencil" />
        {' '}
        {this.t('.edit')}
      </a>
    ) : null

    const deleteButton = showDeleteButton ? (
      <FormButton
        className="o-btn c-btn c-btn--secondary u-mt-small"
        action={localPath(`/pledges/${pledgeId}`)}
        method="DELETE">
        <FontAwesome name="trash-o" />
        {' '}
        {this.t('.delete')}
      </FormButton>
    ) : null

    return (
      <div className="c-pledge-tile__state-footer">
        {editButton}
        {' '}
        {deleteButton}
      </div>
    )
  }
}

