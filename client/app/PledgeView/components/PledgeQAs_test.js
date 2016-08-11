import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import PledgeQAs from './PledgeQAs'

describe('<PledgeQAs />', function () {
  it('should render', function () {
    const forms = { questionForm: {}, answerForm: {} }
    const wrapper = shallow(
      <PledgeQAs comments={[]} forms={forms} userCanAskQuestions={true}
        userCanAnswer={false} isSubmitting={false}
      />
    )

    wrapper.find('div').length.should.equal(1)
  })
})
