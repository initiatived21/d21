import React         from 'react';
import { shallow }   from 'enzyme';
import PledgeTag     from './PledgeTag';
import PledgeTagList from './PledgeTagList';

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
