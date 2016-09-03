import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import ProgressBar from '../../PledgeData/components/ProgressBar'
import PledgeState from '../../PledgeData/components/PledgeState'
import daysTill from '../../lib/date_and_time/daysTill'
import { FORMAT_DATE_AND_TIME } from '../../lib/config'

export default class PledgeData extends ChildComponent {
  static propTypes = {
    state: PropTypes.string.isRequired,
    initiator: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired
  }

  render() {
    const { state, initiator, amount, deadline, signatures_count } = this.props

    const remainingDays = daysTill(deadline)
    const isUrgent = remainingDays <= 5 ? true : false

    const percentage = Math.round(100 / amount * signatures_count)

    const deadlineStr = I18n.strftime(new Date(Date.parse(deadline)), FORMAT_DATE_AND_TIME[I18n.locale])

    return (
      <div className="c-pledge-data">
        <div className="o-layout">
          <div className="c-pledge-data__initiator o-layout__item u-1/3@m">
            <h2 className="c-pledge-data__title">{this.t('.initiator.title')}</h2>
            <p>{initiator}</p>
          </div>
          <div className="c-pledge-data__signees o-layout__item u-1/3@m">
            <h2 className="c-pledge-data__title">{this.t('.signees.title')}</h2>
            <p>
              {signatures_count} {this.t('.signees.of')} {amount}<br />
              {this.t('.signees.signees')}
            </p>
            <ProgressBar percentage={percentage} />
            <p className="u-mt-small">
              {percentage}&thinsp;% {this.t('.signees.of_goal')}
            </p>
          </div>
          <div className="c-pledge-data__time o-layout__item u-1/3@m">
            <h2 className="c-pledge-data__title">{this.t('.time.title')}</h2>
            <PledgeState state={state} remainingDays={remainingDays} urgent={isUrgent} />
            <p className="u-mt-small">
              <b>{this.t('.time.closes_on')}:</b><br />
              {deadlineStr}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
