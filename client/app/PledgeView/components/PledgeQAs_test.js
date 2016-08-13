import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import PledgeQAs from './PledgeQAs'

describe('<PledgeQAs />', function () {
  const props = {
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
    isSubmitting: false
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeQAs {...props} />)

    wrapper.find('div').length.should.equal(1)
  })

  it('should render a text message if there are no comments yet', function () {
    const wrapper = shallow(<PledgeQAs {...props} comments={[]} />)

    wrapper.find('p').length.should.equal(1)
  })
})
