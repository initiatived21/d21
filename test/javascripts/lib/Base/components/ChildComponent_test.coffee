#= require react
#= require components
#= require react-addons-test-utils
{ TestUtils } = React.addons

ChildComponent = require('react/lib/Base/components/ChildComponent')


describe 'ChildComponent', ->
  it 'should define a lazy translation helper', ->
    I18n.translations.en =
      ChildComponent:
        some_scope:
          foo: 'bar'

    child = new ChildComponent
    child.t('.some_scope.foo').should.equal 'bar'
