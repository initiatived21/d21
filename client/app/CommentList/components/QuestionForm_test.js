import React from 'react'
import { shallow } from 'enzyme'
import QuestionForm from './QuestionForm'

describe('<QuestionForm />', function () {
  const props = {
    formData: {},
    id: 5,
    isSubmitting: false,
    handleResponse: () => {},
  }

  it('should give the Input a unique key so that it loses focus upon submit', function() {
    const wrapper = shallow(<QuestionForm {...props} />)

    const inputKey = wrapper.find('InputSetWrapper').key()
    inputKey.should.equal('5')
  })
})
