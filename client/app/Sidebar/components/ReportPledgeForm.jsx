import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import { FormButton } from 'rform'

import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class ReportPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  }

  render() {
    const { id } = this.props

    return (
      <aside className="c-report-pledge o-box">
        <p>{this.t('.description')}</p>

        <FormButton
          className="c-report-pledge__button o-btn o-btn--small u-mt-small"
          action={`/${I18n.locale}/pledges/${id}/reports`}
          method='POST'
        >
          <FontAwesome name="exclamation-triangle" />
          {` ${this.t('.report_pledge')}`}
        </FormButton>
      </aside>
    )
  }
}
