import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'

import SignPledgeFormContainer from '../containers/SignPledgeFormContainer'
import ReportPledgeForm from './ReportPledgeForm'
import PreviewExplanation from './PreviewExplanation'
import UpdateForm from './UpdateForm'

export default class PledgeSidebar extends ChildComponent {
  static propTypes = {
    pledge_id: PropTypes.number.isRequired,
    forms: PropTypes.shape({
      signPledgeForm: PropTypes.object.isRequired,
    }),
    // signPledgeFormObject: PropTypes.object.isRequired,
    isPreview: PropTypes.bool.isRequired,
    isDraft: PropTypes.bool.isRequired,
    activateAction: PropTypes.string.isRequired,
    userIsInitiator: PropTypes.bool.isRequired,
  }

  render() {
    const {
      pledge_id, forms, signPledgeFormObject, isPreview, userIsInitiator,
      isDraft, activateAction
    } = this.props
    const { signPledgeForm, updateForm } = forms

    let sidebarField
    if (isPreview) {
      sidebarField = (
        <PreviewExplanation
          isDraft={isDraft} activateAction={activateAction} />
      )
    } else if (userIsInitiator) {
      sidebarField = <UpdateForm formData={updateForm} />
    } else {
      sidebarField =
        <SignPledgeFormContainer id={pledge_id} formData={signPledgeForm} />
    }

    return (
      <div className="o-layout__item u-1/2@m u-1/3@l">
        {sidebarField}
        <ReportPledgeForm id={pledge_id} />
      </div>
    )
  }
}
