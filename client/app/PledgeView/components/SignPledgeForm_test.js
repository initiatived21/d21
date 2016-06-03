import React       from 'react';
import { shallow } from 'enzyme';
import SignPledgeForm from './SignPledgeForm';

describe('<SignPledgeForm />', function () {
  const props = {
    id: 1
  };

  it('should render', function () {
    const wrapper = shallow(<SignPledgeForm {...props} />);
  });
});
