import reducer from './combined.js'
import store   from '../store.js'

describe('combined reducer', function() {
  it('should return the initial state when given undefined', function() {
    reducer(undefined, 'foo').should.deep.equal(store.getState())
  })

  it('should return the state when given an unrecognized action', function() {
    reducer({foo: 'bar'}, {type: 'baz'}).should.deep.equal({foo: 'bar'})
  })

  it('should return a state with merged entities for "ADD_ENTITIES"', function() {
    const state = {
      foos: {1: 'a', 2: 'b'}
    }
    const action = {
      type: 'ADD_ENTITIES',
      entities: {
        foos: {3: 'c'}
      }
    }

    reducer(state, action).should.deep.equal({
      foos: {1: 'a', 2: 'b', 3: 'c'}
    })
  })

  it('performance test', function() {
    console.time('hello')
    for (let i = 0; i < 10000; i++) {
      reducer(undefined, 'foo').should.eql(store.getState())
    }
    console.timeEnd('hello')
  })
})
