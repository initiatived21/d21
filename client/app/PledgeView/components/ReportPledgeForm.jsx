import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

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

        <a className="c-report-pledge__button o-btn o-btn--small u-mt-small" href="">
          <FontAwesome name="exclamation-triangle" />
          {` ${this.t('.report_pledge')}`}
        </a>
      </aside>
    )
  }
}
