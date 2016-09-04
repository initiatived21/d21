import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import CommentAvatar        from '../../Avatar/components/CommentAvatar.jsx'

export default class PledgeAnswer extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <div className="o-layout__item u-4/5@m">
        <div className="c-comment__answer u-clearfix u-mb-small">
          <CommentAvatar className="c-comment__answer-avatar" />
          <p className="c-comment__answer-text">{children}</p>
        </div>
      </div>
    )
  }
}
