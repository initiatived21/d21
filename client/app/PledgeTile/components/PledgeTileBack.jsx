import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import PledgeText           from './PledgeText'
import SocialMediaButtons
  from '../../SocialMediaButtons/components/SocialMediaButtons'
import Avatar from '../../Avatar/components/Avatar'
import { DOMAIN_PROD } from '../../lib/config'

export default class PledgeTileBack extends ChildComponent {
  static propTypes = {
    initiatorName: PropTypes.string.isRequired,
    initiatorImage: PropTypes.string,
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render() {
    const {
      initiatorName, initiatorImage, content, amount, who, requirement, path,
      className, locale
    } = this.props

    const combinedClassName = ['c-pledge-tile o-box', className].join(' ')

    return (
      <div className={combinedClassName}>
        <span className="c-pledge-tile__link">
          <div className="o-block o-block--center" aria-hidden={true}>
            <Avatar
              className="o-block__img" name={initiatorName}
              imagePath={initiatorImage}
            />
            <div className="o-block__body">
              <PledgeText
                content={content}
                amount={amount}
                who={who}
                requirement={requirement}
                locale={locale}
              />
            </div>
          </div>
        </span>
        <div className="c-pledge-tile__button">
          <span className="o-btn c-btn c-btn--disabled">
            <FontAwesome name="reply" flip="horizontal" />
            {'\u00a0' /* Non-breaking spaces because of bug in card renderer/wkhtmltoimage */}
            {this.t('.show_pledge').replace(/ /g, '\u00a0')}
          </span>
        </div>
        <SocialMediaButtons url={`${DOMAIN_PROD}${path}`} />
      </div>
    )
  }
}
