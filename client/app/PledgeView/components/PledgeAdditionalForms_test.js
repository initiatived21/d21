import React       from 'react';
import { shallow } from 'enzyme';

import PledgeAdditionalForms from './PledgeAdditionalForms';
import SignPledgeFormContainer from '../containers/SignPledgeFormContainer';
import ReportPledgeForm from './ReportPledgeForm';

describe('<PledgeAdditionalForms />', function () {
  const props = {
    id: 1,

    signPledgeForm: {
      formData: {
        action: '/',
        authToken: 'a',
        model: 'signature'
      }
    }
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeAdditionalForms {...props} />);

    wrapper.find(SignPledgeFormContainer).length.should.equal(1);
    wrapper.find(ReportPledgeForm).length.should.equal(1);
  });
});
