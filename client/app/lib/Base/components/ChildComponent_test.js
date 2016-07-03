import { assert } from 'chai'
import ChildComponent from './ChildComponent.js'

describe('ChildComponent', function() {
  it('should define a lazy translation helper', function() {
    const child = new ChildComponent()
    assert.isFunction(child.t)
    child.t('.some_scope.foo').should.equal('')
  })
})
