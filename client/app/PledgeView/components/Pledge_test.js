import React       from 'react';
import { shallow } from 'enzyme';

import Pledge from './Pledge';
import TagList from './TagList';

describe('<Pledge />', function () {
  it('should render', function () {
    const wrapper = shallow(<Pledge />);

    wrapper.find(TagList).length.should.equal(1);
  });
});
