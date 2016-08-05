import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import PledgeQuestion from './PledgeQuestion'
import PledgeAnswer from './PledgeAnswer'
import AnswerFormContainer from '../containers/AnswerFormContainer'

export default class PledgeQAs extends ChildComponent {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      response: PropTypes.string,
    }).isRequired,
    formData: PropTypes.object.isRequired,
    userCanAnswer: PropTypes.bool.isRequired,
  }

  render() {
    const { comment, formData, userCanAnswer } = this.props

    let answerDisplayOrForm
    if (comment.response) {
      answerDisplayOrForm = <PledgeAnswer>{comment.response}</PledgeAnswer>
    } else if (userCanAnswer) {
      answerDisplayOrForm = (
        <AnswerFormContainer id={comment.id} formData={formData} />
      )
    }

    return (
      <div className="c-comment">
        <PledgeQuestion>{comment.content}</PledgeQuestion>
        {answerDisplayOrForm}
      </div>
    )
  }
}
