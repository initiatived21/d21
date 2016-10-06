import sinon from 'sinon'
import reducer from './flashMessages'
import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../constants/actionTypes'

describe('flashMessages reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.eql({})
  })

  it('should return the state when given an unrecognized action', function() {
    const state = {
      foo: {
        id: 'foo',
        type: 'notice',
        text: 'Test message'
      },
    }

    reducer(state, {type: 'foo'}).should.eql(state)
  })

  it('should handle ADD_FLASH_MESSAGE', function() {
    const fakeNow = 1470487029361
    const clock = sinon.useFakeTimers(fakeNow)

    const action = {
      type: ADD_FLASH_MESSAGE,
      flashType: 'notice',
      text: 'test',
    }

    reducer({}, action).should.eql({
      1470487029361: {
        id: '1470487029361',
        type: 'notice',
        text: 'test',
      }
    })
  })

  it('should handle REMOVE_FLASH_MESSAGE', function() {
    const state = {
      1470487029361: {
        id: '1470487029361',
        type: 'notice',
        text: 'test',
      },
    }
    const action = {
      type: REMOVE_FLASH_MESSAGE,
      id: '1470487029361',
    }

    reducer(state, action).should.eql({})
  })
})
