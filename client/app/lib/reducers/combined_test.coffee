reducer = require('./combined').default
store = require('../store').default

describe 'combined reducer', ->
  it 'should return the initial state when given undefined', ->
    reducer(undefined, 'foo').should.deep.equal store.getState()

  it 'should return the state when given an unrecognized action', ->
    reducer({foo: 'bar'}, {type: 'baz'}).should.deep.equal {foo: 'bar'}

  it 'should return a state with merged entities for "ADD_ENTITIES"', ->
    state = {foos: {1: 'a', 2: 'b'}}
    action = {type: 'ADD_ENTITIES', entities: {foos: {3: 'c'}}}
    reducer(state, action).should.deep.equal
      foos: { 1: 'a', 2: 'b', 3: 'c' }

