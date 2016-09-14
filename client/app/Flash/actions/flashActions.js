import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../../lib/constants/actionTypes'

export const addFlashMessage = function(flashType, text) {
  return {
    type: ADD_FLASH_MESSAGE,
    flashType,
    text
  }
}

export const removeFlashMessage = function(id) {
  return {
    type: REMOVE_FLASH_MESSAGE,
    id
  }
}
