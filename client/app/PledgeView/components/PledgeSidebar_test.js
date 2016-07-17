import React       from 'react';
import { shallow } from 'enzyme';

import PledgeSidebar from './PledgeSidebar';
import SignPledgeFormContainer from '../containers/SignPledgeFormContainer';
import ReportPledgeForm from './ReportPledgeForm';

describe('<PledgeSidebar />', function () {
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
    const wrapper = shallow(<PledgeSidebar {...props} />);

    wrapper.find(SignPledgeFormContainer).length.should.equal(1);
    wrapper.find(ReportPledgeForm).length.should.equal(1);
  });
});
