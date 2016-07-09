import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import PledgeQAs from './PledgeQAs';

describe('<PledgeQAs />', function () {
  it('should render', function () {
    const formData = { questionForm: {}, answerForm: {} }
    const wrapper = shallow(<PledgeQAs comments={[]} formData={formData} />);

    wrapper.find('dl').length.should.equal(1);
  });
});
