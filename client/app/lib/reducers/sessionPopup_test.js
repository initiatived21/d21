import reducer from './sessionPopup.js'
import { HIDE_SESSION_POPUP, TOGGLE_SESSION_POPUP } from '../constants/actionTypes'

describe('sessionPopup reducer', function() {
  it('should return the initial state', function() {
    reducer(undefined, {}).should.equal(false)
  })

  it('should return the state when given an unrecognized action', function() {
    reducer('xyz', {type: 'foo'}).should.equal('xyz')
  })

  it('should handle HIDE_SESSION_POPUP', function() {
    reducer(true, {
      type: HIDE_SESSION_POPUP
    }).should.equal(false)
  })

  it('should handle TOGGLE_SESSION_POPUP when false', function() {
    reducer(false, {
      type: TOGGLE_SESSION_POPUP
    }).should.equal(true)
  })

  it('should handle TOGGLE_SESSION_POPUP when true', function() {
    reducer(true, {
      type: TOGGLE_SESSION_POPUP
    }).should.equal(false)
  })
})
