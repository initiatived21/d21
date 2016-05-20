import React             from 'react';
import { shallow }       from 'enzyme';
import { PledgeTagList, PledgeTag } from './PledgeTile';

describe('<PledgeTagList />', function () {
  const props = {
    names: [
      'Familie',
      'Kinder',
      'Frauen'
    ]
  };

  it('should render', function () {
    const wrapper = shallow(<PledgeTagList {...props} />);

    wrapper.hasClass('c-tag-list').should.be.true;
    wrapper.find(PledgeTag).length.should.equal(3);
  });
});
