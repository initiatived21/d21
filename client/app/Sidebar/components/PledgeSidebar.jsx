import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'

import SignPledgeFormContainer from '../containers/SignPledgeFormContainer'
import ReportPledgeForm from './ReportPledgeForm'
import PreviewExplanation from './PreviewExplanation'
import UpdateFormContainer from '../containers/UpdateFormContainer'

export default class PledgeSidebar extends ChildComponent {
  static propTypes = {
    pledge_id: PropTypes.number.isRequired,
    forms: PropTypes.shape({
      signPledgeForm: PropTypes.object.isRequired,
      updateForm: PropTypes.object.isRequired
    }),
    isPreview: PropTypes.bool.isRequired,
    isDraft: PropTypes.bool.isRequired,
    showSignForm: PropTypes.bool.isRequired,
    userConfirmed: PropTypes.bool.isRequired,
    activateAction: PropTypes.string.isRequired,
    userIsInitiator: PropTypes.bool.isRequired,
    renderReportForm: PropTypes.bool,
    className: PropTypes.string
  }

  render() {
    const {
      pledge_id, forms, signPledgeFormObject, isPreview, userIsInitiator,
      isDraft, activateAction, userConfirmed, renderReportForm, className,
      showSignForm
    } = this.props
    const { signPledgeForm, updateForm } = forms

    let sidebarField
    if (isPreview) {
      sidebarField = (
        <PreviewExplanation
          pledgeId={pledge_id} isDraft={isDraft}
          activateAction={activateAction} userConfirmed={userConfirmed} />
      )
    } else if (userIsInitiator) {
      sidebarField = <UpdateFormContainer formData={updateForm} />
    } else if (showSignForm) {
      sidebarField =
        <SignPledgeFormContainer id={pledge_id} formData={signPledgeForm} />
    }

    let combinedClassName = ''
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <div className={combinedClassName}>
        {sidebarField}
        {renderReportForm ? <ReportPledgeForm id={pledge_id} /> : null}
      </div>
    )
  }
}
