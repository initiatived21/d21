I18n = require('i18n-js')
RootComponent = require('./RootComponent').default

describe 'RootComponent', ->
  it 'should set the global locale to the given locale', ->
    I18n.locale = 'foo'
    new RootComponent(locale: 'bar')
    I18n.locale.should.equal 'bar'
