import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../../lib/constants/actionTypes'

export const addFlashMessageAction = function(flashType, text) {
  return {
    type: ADD_FLASH_MESSAGE,
    flashType,
    text
  }
}

export const removeFlashMessageAction = function(id) {
  return {
    type: REMOVE_FLASH_MESSAGE,
    id
  }
}
