import pledge from './pledge.js';

describe('pledge reducer', function() {
  it('should return the same state for an unknown action', () => {
    const state = {
      id: 0,
      foo: 'bar'
    };
    const action = {
      type: 'UNKNOWN'
    };

    pledge(state, action).should.deep.equal(state);
  });

  it('should provide an initial state', () => {
    const initialState = {
      id: undefined
    };

    pledge(undefined, {}).should.deep.equal(initialState);
  });

  it('should update an attribute if id is correct', () => {
    const stateBefore = {
      id: 0,
      foo: 'bar'
    };
    const stateAfter = {
      id: 0,
      foo: 'baz'
    };
    const action = {
      type: 'UPDATE_PLEDGE_ATTRIBUTE',
      id: 0,
      attribute: 'foo',
      value: 'baz'
    };

    pledge(stateBefore, action).should.deep.equal(stateAfter);
  });

  it('should not update an attribute if id is not correct', () => {
    const state = {
      id: 0,
      foo: 'bar'
    };
    const action = {
      type: 'UPDATE_PLEDGE_ATTRIBUTE',
      id: 1,
      attribute: 'foo',
      value: 'baz'
    };

    pledge(state, action).should.deep.equal(state);
  });
});
