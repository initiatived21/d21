import React         from 'react';
import { shallow }   from 'enzyme';
import Tag           from './Tag';
import TagList       from './TagList';

describe('<TagList />', function () {
  const props = {
    names: [
      'Familie',
      'Kinder',
      'Frauen'
    ]
  };

  it('should render', function () {
    const wrapper = shallow(<TagList {...props} />);

    wrapper.hasClass('c-tag-list').should.be.true;
    wrapper.find(Tag).length.should.equal(3);
  });
});
