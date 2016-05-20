import React                   from 'react';
import { shallow }             from 'enzyme';
import { PledgeDaysRemaining } from './PledgeTile';

describe('<PledgeDaysRemaining />', function () {
  const
    props5 = { days: 5 },
    props1 = { days: 1 },
    props0 = { days: 0 }
  ;

  it('should render', function () {
    const wrapper = shallow(<PledgeDaysRemaining {...props5} />);

    wrapper.hasClass('c-pledge-tile__days').should.be.true;
    wrapper.text().should.equal('Noch 5 Tage');
  });

  it('should use singular for 1 day', function () {
    const wrapper = shallow(<PledgeDaysRemaining {...props1} />);

    wrapper.text().should.equal('Noch 1 Tag');
  });

  it('should use plural for 0 days', function () {
    const wrapper = shallow(<PledgeDaysRemaining {...props0} />);

    wrapper.text().should.equal('Noch 0 Tage');
  });
});
