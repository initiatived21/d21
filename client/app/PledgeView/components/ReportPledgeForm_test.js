import React       from 'react';
import { shallow } from 'enzyme';
import ReportPledgeForm from './ReportPledgeForm';

describe('<ReportPledgeForm />', function () {
  const props = {
    id: 1
  };

  it('should render', function () {
    const wrapper = shallow(<ReportPledgeForm {...props} />);
  });
});
