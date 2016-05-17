import ChildComponent from './ChildComponent.js';

describe('ChildComponent', function() {
  it('should define a lazy translation helper', function() {
    const child = new ChildComponent();
    child.t('.some_scope.foo').should.include('ChildComponent.some_scope.foo');
  });
});
