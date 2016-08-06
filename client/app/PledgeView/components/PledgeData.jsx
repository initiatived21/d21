import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import Initiator from '../../PledgeData/components/Initiator'
import ProgressBar from '../../PledgeData/components/ProgressBar'
import PledgeState from '../../PledgeData/components/PledgeState'

export default class PledgeData extends ChildComponent {
  static propTypes = {
    initiator: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired
  }

  render() {
    const { initiator, amount, deadline, signatures_count } = this.props

    const percentage = Math.round(100 / amount * signatures_count)

    return (
      <div className="c-pledge-data">
        <div className="o-layout">
          <div className="c-pledge-data__initiator o-layout__item u-1/3">
            <p className="c-pledge-data__title">{this.t('.initiator.title')}</p>
            <p>{initiator}</p>
          </div>
          <div className="c-pledge-data__signees o-layout__item u-1/3">
            <p className="c-pledge-data__title">{this.t('.signees.title')}</p>
            <p>{signatures_count} {this.t('.signees.of')} {amount}<br />Unterzeichner</p>
            <ProgressBar percentage={percentage} />
            <p>{percentage}&thinsp;% {this.t('.signees.of_goal')}</p>
          </div>
          <div className="c-pledge-data__time o-layout__item u-1/3">
            <p className="c-pledge-data__title">{this.t('.time.title')}</p>
            <PledgeState remainingDays={5} urgent />
            <p className="u-mt-small"><b>{this.t('.time.closes_on')}:</b><br />{deadline}</p>
          </div>
        </div>
      </div>
    )
  }
}
