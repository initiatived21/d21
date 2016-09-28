import * as types from '../../lib/constants/actionTypes'
import imageInput, { IMAGE_STATE_NONE } from './imageInput'

const initialState = {
  avatar: {
    id: 'avatar',
    imageState: IMAGE_STATE_NONE
  },
  image: {
    id: 'image',
    imageState: IMAGE_STATE_NONE
  }
}

export default function imageInputs(state = initialState, action) {
  switch (action.type) {
  case types.LOAD_IMAGE_START:
  case types.LOAD_IMAGE_SUCCESS:
  case types.LOAD_IMAGE_FAILURE:
  case types.CHANGE_CROP:
  case types.CROP_IMAGE:
  case types.SET_SERVER_IMAGE:
  case types.CLEAR_IMAGE:
    return {
      avatar: imageInput(state.avatar, action),
      image: imageInput(state.image, action),
    }

  default:
    return state
  }
}
