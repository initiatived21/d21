import reducer from './entities.js'
import * as types from '../constants/actionTypes'

describe('entities reducer', function() {
  it('should return the initial state', function() {
    const initialState = {
      pledges: {},
      tags: {},
      users: {}
    }
    reducer(undefined, {}).should.eql(initialState)
  })

  it('should return the state when given an unrecognized action', function() {
    reducer({pledges: 'bar'}, {type: 'baz'}).should.deep.equal({pledges: 'bar'})
  })

  it('should handle ADD_ENTITIES', function() {
    const state = {
      foos: {
        1: 'a',
        2: 'b'
      }
    }
    const action = {
      type: types.ADD_ENTITIES,
      entities: {
        foos: {
          3: 'c'
        }
      }
    }
    reducer(state, action).should.eql({
      foos: {
        1: 'a',
        2: 'b',
        3: 'c'
      }
    })
  })

  it('should handle SET_ENTITY', function() {

  })
})
