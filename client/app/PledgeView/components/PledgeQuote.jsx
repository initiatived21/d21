import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import Avatar from '../../Avatar/components/Avatar'

export default class PledgeQuote extends ChildComponent {
  static propTypes = {
    imagePath: PropTypes.string,
    initiatorName: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
  }

  render() {
    const {
      imagePath, initiatorName, content, amount, who, requirement, locale
    } = this.props

    return (
      <div className="c-pledge__quote o-media o-media--small">
        <Avatar large
          className="o-media__img" name={initiatorName} imagePath={imagePath}
        />
        <div className="o-media__body">
          <blockquote className="c-pledge__text">
            {this.t('.promise.part1', {locale})} {content}
            {this.t('.promise.part2', {locale})} {amount} {who} {requirement}.
          </blockquote>
        </div>
      </div>
    )
  }
}
