import store from './store.js';

describe('store', function() {
  const initialState = {
    pledges: {},
    tags: [],
    ui: {
      searchResultsLoading: false,
      signInFormVisible: false
    },
    isSubmitting: {}
  };

  it('should have an empty initial state', function() {
    store.getState().should.deep.equal(initialState);
  });
});
