import React          from 'react'
import { shallow }    from 'enzyme'
import ProgressBar from './ProgressBar'

describe('<ProgressBar />', function () {
  const props = {
    percentage: 60,
    urgent: false
  }

  it('should render', function () {
    const wrapper = shallow(<ProgressBar {...props} />)

    wrapper.find('div').length.should.equal(2)
  })
})
