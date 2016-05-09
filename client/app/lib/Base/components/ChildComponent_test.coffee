ChildComponent = require('./ChildComponent').default

describe 'ChildComponent', ->
  it 'should define a lazy translation helper', ->
    child = new ChildComponent
    child.t('.some_scope.foo').should.include 'ChildComponent.some_scope.foo'
