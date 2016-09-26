import React       from 'react'
import { shallow } from 'enzyme'
import PledgeDescription from './PledgeDescription'

describe('<PledgeDescription />', function () {
  it('should render', function () {
    const wrapper = shallow(
      <PledgeDescription>
        Dies ist die Beschreibung des Versprechens.
      </PledgeDescription>
    )

    wrapper.hasClass('c-pledge__description').should.be.true
    wrapper.text().should.equal('Dies ist die Beschreibung des Versprechens.')
  })

  it('should render carriage return + newline combinations as <br/> tags', function () {
    const wrapper = shallow(
      <PledgeDescription>
        {'Dies ist die Beschreibung\r\ndes Versprechens.\r\n'}
      </PledgeDescription>
    )

    wrapper.html().should.equal(
      '<p class="c-pledge__description">Dies ist die Beschreibung<br/>des Versprechens.<br/></p>'
    )
  })

  it('should render newlines as <br/> tags', function () {
    const wrapper = shallow(
      <PledgeDescription>
        {'Dies ist die Beschreibung\ndes Versprechens.\n'}
      </PledgeDescription>
    )

    wrapper.html().should.equal(
      '<p class="c-pledge__description">Dies ist die Beschreibung<br/>des Versprechens.<br/></p>'
    )
  })

  it('should "pass through" its className prop', function() {
    const wrapper = shallow(<PledgeDescription className="dummy">test</PledgeDescription>)

    wrapper.find('p').hasClass('dummy').should.be.true
  })
})
