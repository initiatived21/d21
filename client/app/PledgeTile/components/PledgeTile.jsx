import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import PledgeTileFront      from './PledgeTileFront'
import PledgeTileBack       from './PledgeTileBack'
import StateHeader          from './StateHeader'
import StateFooterContainer from '../containers/StateFooterContainer'

export default class PledgeTile extends ChildComponent {
  static propTypes = {
    pledge: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      who: PropTypes.string.isRequired,
      requirement: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      signatures_count: PropTypes.number.isRequired,
      aasm_state: PropTypes.string.isRequired
    }),
    showControls: PropTypes.bool
  }

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.pledge.id}`
  }

  // provisional version
  // should update itself at 0:00 o'clock
  getRemainingDays() {
    const pledge_date = Date.parse(this.props.pledge.deadline)
    const now = Date.now()

    return Math.floor((pledge_date - now)/1000/60/60/24)
  }

  render() {
    const { pledge, showControls } = this.props
    const pledgePath = this.getPledgePath()

    const remainingDays = this.getRemainingDays()
    const isUrgent = remainingDays <= 5 ? true : false

    const state = pledge.aasm_state
    const stateHeader = showControls ? <StateHeader state={state} /> : null
    const stateFooter = showControls ? <StateFooterContainer pledge={pledge} /> : null

    return (
      <li className="o-layout__item u-1/2@m u-1/3@l u-mb">
        <article className="c-pledge-tile o-flipper">
          <div className="c-pledge-tile__inner o-flipper__inner">
            {stateHeader}
            <PledgeTileFront
              title="Schulbücher für Willkommensklassen"
              deadline={pledge.deadline}
              signatures_count={pledge.signatures_count}
              signatures_total={pledge.amount}
              path={pledgePath}
            />
            <PledgeTileBack
              content={pledge.content}
              amount={pledge.amount}
              who={pledge.who}
              requirement={pledge.requirement}
              path={pledgePath}
            />
          </div>
        </article>
        {stateFooter}
      </li>
    )
  }
}
