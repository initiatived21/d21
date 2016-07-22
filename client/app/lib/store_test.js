import store from './store.js';

describe('store', function() {
  const initialState = {
    pledges: {},
    tags: [],
    ui: {
      searchResultsLoading: false,
      sessionPopupVisible: false
    },
    isSubmitting: {}
  };

  it('should have an empty initial state', function() {
    store.getState().should.deep.equal(initialState);
  });
});
