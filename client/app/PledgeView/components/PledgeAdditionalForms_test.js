import React       from 'react';
import { shallow } from 'enzyme';

import PledgeAdditionalForms from './PledgeAdditionalForms';
import SignPledgeForm from './SignPledgeForm';
import ReportPledgeForm from './ReportPledgeForm';

describe('<PledgeAdditionalForms />', function () {
  const props = {
    id: 1
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeAdditionalForms {...props} />);

    wrapper.find(SignPledgeForm).length.should.equal(1);
    wrapper.find(ReportPledgeForm).length.should.equal(1);
  });
});
