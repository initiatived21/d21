import store from './store.js';

describe('store', function() {
  it('should have an empty initial state', function() {
    store.getState().should.deep.equal({ pledges: {} });
  });
});
