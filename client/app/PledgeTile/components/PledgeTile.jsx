import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import PledgeTileFront      from './PledgeTileFront'
import PledgeTileBack       from './PledgeTileBack'
import StateHeader          from './StateHeader'
import StateFooterContainer from '../containers/StateFooterContainer'
import daysTill             from '../../lib/date_and_time/daysTill'

export default class PledgeTile extends ChildComponent {
  static propTypes = {
    pledge: PropTypes.shape({
      id: PropTypes.number.isRequired,
      aasm_state: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      who: PropTypes.string.isRequired,
      requirement: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      signatures_count: PropTypes.number.isRequired,
      aasm_state: PropTypes.string.isRequired,
      initiator: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          url: PropTypes.string,
        }).isRequired,
      }).isRequired,
      tags: PropTypes.array.isRequired,
    }),
    showControls: PropTypes.bool,
  }

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.pledge.id}`
  }

  render() {
    const { pledge, showControls } = this.props
    const initiator = pledge.initiator
    const avatarUrl = initiator.avatar.url
    const pledgePath = this.getPledgePath()

    const remainingDays = daysTill(pledge.deadline)
    const isUrgent = remainingDays <= 5 ? true : false

    const state = pledge.aasm_state
    const stateHeader = showControls ? <StateHeader state={state} /> : null
    const stateFooter = showControls ? <StateFooterContainer pledge={pledge} /> : null

    return (
      <li className="o-layout__item u-1/2@m u-1/3@l u-mb">

        {stateHeader}

        <div className="o-flipper">
          <article className="o-flipper__inner">
            <div className="o-flipper__front">
              <PledgeTileFront
                state={state}
                initiatorName={initiator.name}
                initiatorImage={avatarUrl}
                title={pledge.title}
                deadline={pledge.deadline}
                signatures_count={pledge.signatures_count}
                signatures_total={pledge.amount}
                path={pledgePath}
                tags={pledge.tags}
              />
            </div>
            <div className="o-flipper__back">
              <PledgeTileBack
                initiatorName={initiator.name}
                initiatorImage={avatarUrl}
                content={pledge.content}
                amount={pledge.amount}
                who={pledge.who}
                requirement={pledge.requirement}
                path={pledgePath}
              />
            </div>
          </article>
        </div>

        {stateFooter}

      </li>
    )
  }
}
