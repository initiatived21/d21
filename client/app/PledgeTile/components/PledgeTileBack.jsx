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
        <a className="c-pledge-tile__link" href={path}>
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
        </a>
        <div className="c-pledge-tile__button">
          <a href={path} className="o-btn c-btn c-btn--primary">
            <FontAwesome name="reply" flip="horizontal" />
            {' '}
            {this.t('.show_pledge')}
          </a>
        </div>
        <SocialMediaButtons url={`${DOMAIN_PROD}${path}`} />
      </div>
    )
  }
}
