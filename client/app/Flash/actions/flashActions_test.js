import * as actions from './flashActions'
import * as types from '../../lib/constants/actionTypes'

describe ('actions', function() {
  it('creates an ADD_FLASH_MESSAGE action', function() {
    const
      text = 'dummy text',
      flashType = 'notice'
    const expectedAction = {
      type: types.ADD_FLASH_MESSAGE,
      flashType,
      text
    }

    actions.addFlashMessage(flashType, text).should.eql(expectedAction)
  })

  it('creates a REMOVE_FLASH_MESSAGE action', function() {
    const id = 'flash_id'
    const expectedAction = {
      type: types.REMOVE_FLASH_MESSAGE,
      id
    }

    actions.removeFlashMessage(id).should.eql(expectedAction)
  })
})
