import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import TagList              from '../../TagList/components/TagList'
import InitiatorWithImage   from '../../PledgeData/components/InitiatorWithImage'
import PledgeState          from '../../PledgeData/components/PledgeState'
import ProgressBar          from '../../PledgeData/components/ProgressBar'
import daysTill             from '../../lib/date_and_time/daysTill'
import { DOMAIN_PROD, DUMMY_IMAGE_PATH } from '../../lib/config'

export default class PledgeTileFront extends ChildComponent {
  static propTypes = {
    state: PropTypes.string.isRequired,
    initiatorName: PropTypes.string.isRequired,
    initiatorImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    signatures_count: PropTypes.number.isRequired,
    signatures_total: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }

  render() {
    const {
      state, initiatorName, initiatorImage, title, deadline, signatures_count,
      signatures_total, path, tags
    } = this.props

    const remainingDays = daysTill(deadline)
    const isUrgent = remainingDays <= 5 ? true : false

    const percentage = Math.round(100 / signatures_total * signatures_count)

    return (
      <div className="c-pledge-tile o-box">
        <a className="c-pledge-tile__link"
           href={path}>
          <TagList tags={tags} />
          <InitiatorWithImage imagePath={initiatorImage}>
            {initiatorName}
          </InitiatorWithImage>

          <div className="c-pledge-tile__title">
            <h2>{title}</h2>
          </div>

          <div className="o-media o-media--small">
            <div className="o-media__img">
              <PledgeState state={state} remainingDays={remainingDays} urgent={isUrgent} />
            </div>
            <div className="o-media__body">
              <p className="u-pt-tiny">
                {signatures_count} {this.t('.of')} {signatures_total}<br />{this.t('.signees')}
              </p>
              <ProgressBar percentage={percentage} urgent={isUrgent} />
            </div>
          </div>
        </a>
      </div>
    )
  }
}
