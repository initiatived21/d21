#= require react
#= require components
#= require react-addons-test-utils
{ TestUtils } = React.addons

RootComponent = require('react/lib/Base/components/RootComponent')

describe 'RootComponent', ->
  it 'should set the global locale to the given locale', ->
    I18n.locale = 'foo'
    new RootComponent(locale: 'bar')
    I18n.locale.should.equal 'bar'
