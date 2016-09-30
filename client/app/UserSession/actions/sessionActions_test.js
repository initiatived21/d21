import * as actions from './sessionActions'
import * as types from '../../lib/constants/actionTypes'

describe ('actions', function() {
  it('should create an action to toggle the session popup', function() {
    const expectedAction = {
      type: types.TOGGLE_SESSION_POPUP,
    }

    actions.toggleSessionPopup().should.eql(expectedAction)
  })

  it('should create an action to hide the session popup', function() {
    const expectedAction = {
      type: types.HIDE_SESSION_POPUP,
    }

    actions.hideSessionPopup().should.eql(expectedAction)
  })

  it('should create an action to set the current user', function() {
    const id = 7
    const expectedAction = {
      type: types.SET_CURRENT_USER,
      id
    }

    actions.setCurrentUser(id).should.eql(expectedAction)
  })

  it('should create an action to set the auth token', function() {
    const token = 'xyz'
    const expectedAction = {
      type: types.SET_AUTH_TOKEN,
      token
    }

    actions.setAuthToken(token).should.eql(expectedAction)
  })
})
