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
  };

  render() {
    const { imagePath, initiatorName, content, amount, who, requirement } = this.props

    return (
      <div className="c-pledge__quote o-media o-media--small">
        <Avatar className="o-media__img" name={initiatorName} imagePath={imagePath} large />
        <div className="o-media__body">
          <blockquote className="c-pledge__text">
            {this.t('.promise.part1')} {content}{this.t('.promise.part2')} {amount} {who} {requirement}.
          </blockquote>
        </div>
      </div>
    )
  }
}
