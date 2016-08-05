import React from 'react'
import FontAwesome from 'react-fontawesome'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import GoogleplusButton from './GoogleplusButton'
import LinkedinButton from './LinkedinButton'
import XingButton from './XingButton'

describe('Social media button', function() {
  var tests = [
    {
      component: FacebookButton,
      componentName: 'FacebookButton',
      expectedUrl: 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.example.com'
    },
    {
      component: TwitterButton,
      componentName: 'TwitterButton',
      expectedUrlRegex: /^https:\/\/twitter\.com\/intent\/tweet\?text=[0-9a-z%]*&url=http%3A%2F%2Fwww\.example\.com$/
    },
    {
      component: GoogleplusButton,
      componentName: 'GoogleplusButton',
      expectedUrl: 'https://plus.google.com/share?url=http%3A%2F%2Fwww.example.com'
    },
    {
      component: LinkedinButton,
      componentName: 'LinkedinButton',
      expectedUrl: 'https://www.linkedin.com/cws/share?url=http%3A%2F%2Fwww.example.com'
    },
    {
      component: XingButton,
      componentName: 'XingButton',
      expectedUrl: 'https://www.xing.com/social_plugins/share?url=http%3A%2F%2Fwww.example.com'
    }
  ]

  tests.forEach(function(test) {
    describe(`<${test.componentName} />`, function() {
      it('should render', function() {
        const wrapper = shallow(React.createElement(test.component,
          { url: '', handleClick: () => null }))

        wrapper.find('li').length.should.equal(1)
        wrapper.find('a').length.should.equal(1)
        wrapper.find(FontAwesome).length.should.equal(1)
      })

      it('should link to the correct URL', function() {
        const wrapper = shallow(React.createElement(test.component,
          { url: 'http://www.example.com', handleClick: () => null }))
        const href = wrapper.find('a').at(0).props().href

        if (test.expectedUrl) {
          href.should.equal(test.expectedUrl)
        }
        else if (test.expectedUrlRegex) {
          href.should.match(test.expectedUrlRegex)
        }
      })

      it('should call the click handler if clicked', function() {
        const onButtonClick = sinon.spy()
        const wrapper = mount(React.createElement(test.component,
          { url: '', handleClick: onButtonClick }))

        wrapper.find('a').simulate('click')
        onButtonClick.calledOnce.should.be.true
      })
    })
  })
})
