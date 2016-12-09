import React from 'react'
import { shallow } from 'enzyme'
import QuestionForm from './QuestionForm'
import { Form } from 'rform'

describe('<QuestionForm />', function () {
  const props = {
    formData: {},
    id: 5,
    isSubmitting: false,
    handleResponse: () => {},
    afterResponse: () => {},
  }

  it('should render a form', function() {
    const wrapper = shallow(<QuestionForm {...props} />)

    wrapper.find(Form).length.should.equal(1)
  })

  it('should not render a form if it was submitted earlier', function() {
    const wrapper = shallow(<QuestionForm {...props} wasSubmitted />)

    wrapper.find(Form).length.should.equal(0)
  })
})
