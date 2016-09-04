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
      <article className="c-comment__answer u-4/5@m">
        <CommentAvatar className="c-comment__answer-avatar" />
        <p className="c-comment__answer-text">{children}</p>
      </article>
    )
  }
}
