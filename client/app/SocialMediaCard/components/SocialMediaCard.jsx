/*
 *  Social media card, only used server-side to create Facebook and Twitter images
 */

import React, { PropTypes }  from 'react'
import RootComponent         from '../../lib/Base/components/RootComponent.js'
import PledgeTileFront       from '../../PledgeTile/components/PledgeTileFront'
import PledgeTileBack        from '../../PledgeTile/components/PledgeTileBack'
import localPath             from '../../lib/browser/localPath'

export default class SocialMediaCard extends RootComponent {
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
      locale: PropTypes.string.isRequired,
      initiator: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          url: PropTypes.string,
        }).isRequired,
      }).isRequired,
      tags: PropTypes.array.isRequired,
    }),
    avatarPath: PropTypes.string.isRequired,
  };

  render() {
    const { pledge, avatarPath } = this.props

    const initiator = pledge.initiator
    const initiatorName = initiator.organization || initiator.name
    const pledgePath = localPath(`/pledges/${pledge.id}`)
    const state = pledge.aasm_state
    const className='c-pledge-tile--standalone'

    return(
      <div className="c-card">
        <div className="c-card__front">
          <PledgeTileFront
            className={className}
            state={state}
            initiatorName={initiatorName}
            initiatorImage={avatarPath}
            title={pledge.title}
            deadline={pledge.deadline}
            signatures_count={pledge.signatures_count}
            signatures_total={pledge.amount}
            path={pledgePath}
            tags={pledge.tags}
            locale={pledge.locale}
          />
        </div>
        <div className="c-card__back">
          <PledgeTileBack
            className={className}
            initiatorName={initiatorName}
            initiatorImage={avatarPath}
            content={pledge.content}
            amount={pledge.amount}
            who={pledge.who}
            requirement={pledge.requirement}
            path={pledgePath}
            locale={pledge.locale}
          />
        </div>
      </div>
    )
  }
}
