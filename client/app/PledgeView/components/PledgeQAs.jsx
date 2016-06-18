import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeQuestion from './PledgeQuestion'
import PledgeAnswer from './PledgeAnswer'

export default class PledgeQAs extends ChildComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  render() {
    const { comments } = this.props

    return (
      <section className="o-layout__item">
        <h3>{this.t('.heading')}</h3>
        <dl>
          {comments.map( comment =>
            <div class='PledgeComment' key={comment.id}>
              <PledgeQuestion>{comment.content}</PledgeQuestion>
              <PledgeAnswer>{comment.response}</PledgeAnswer>
            </div>
          )}
        </dl>
      </section>
    )
  }
}
