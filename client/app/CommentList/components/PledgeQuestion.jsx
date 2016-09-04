import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import CommentAvatar        from '../../Avatar/components/CommentAvatar.jsx'

export default class PledgeQuestion extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <article className="c-comment__question u-4/5@m">
        <CommentAvatar className="c-comment__question-avatar" />
        <p className="c-comment__question-text">{children}</p>
      </article>
    )
  }
}
