import React from 'react'
import { shallow } from 'enzyme'
import PledgeCommentList from './PledgeCommentList'
import QuestionFormContainer from '../containers/QuestionFormContainer'

describe('<PledgeCommentList />', function () {
  const props = {
    pledge_id: 1,
    comments: [
      {
        id: 1,
        content: 'question1',
        response: 'answer1'
      },
      {
        id: 2,
        content: 'question2'
      }
    ],
    forms: {
      questionForm: {},
      answerForm: {}
    },
    userCanAskQuestions: true,
    userCanAnswer: false,
    isSubmitting: false,
    questionFormId: 2,
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeCommentList {...props} />)

    wrapper.find('div').length.should.equal(1)
  })

  it('should render a text message if there are no comments yet', function () {
    const wrapper = shallow(<PledgeCommentList {...props} comments={[]} />)

    wrapper.find('p').length.should.equal(1)
  })

  it('should render a question form with the given id', function() {
    const wrapper = shallow(<PledgeCommentList {...props} />)

    const questionForm = wrapper.find(QuestionFormContainer)

    questionForm.length.should.equal(1)
    questionForm.props().id.should.equal(2)
  })
})
