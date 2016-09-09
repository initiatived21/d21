import assign from 'lodash/assign'
import forIn from 'lodash/forIn'
import * as types from '../../lib/constants/actionTypes'
import calculateDefaultCrop from '../../lib/image_processing/calculateDefaultCrop'

export const IMAGE_STATE_NONE = 0
export const IMAGE_STATE_LOADING = 1
export const IMAGE_STATE_LOADED = 2
export const IMAGE_STATE_CROPPED = 3

const initialState = {
  avatar: {
    imageState: IMAGE_STATE_NONE,
    originalImage: null,
    originalImageWidth: 0,
    originalImageHeight: 0,
    filename: null,
    crop: {},
    croppedImageUrl: '',
  },
  image: {
    imageState: IMAGE_STATE_NONE,
    originalImage: null,
    originalImageWidth: 0,
    originalImageHeight: 0,
    filename: null,
    crop: {},
    croppedImageUrl: '',
  }
}

export default function imageInputs(state = initialState, action) {
  let newState
  const id = action.id

  switch (action.type) {
  case types.LOAD_IMAGE_START:
    newState = assign({}, state)
    newState[id].imageState = IMAGE_STATE_LOADING
    return newState

  case types.LOAD_IMAGE_SUCCESS:
    newState = assign({}, state)
    const originalImage = action.image, aspect = action.aspect
    const crop = calculateDefaultCrop(originalImage.width, originalImage.height, aspect)

    newState[id] = {
      originalImage,
      originalImageWidth: originalImage.width,
      originalImageHeight: originalImage.height,
      filename: action.filename,
      crop,
      imageState: IMAGE_STATE_LOADED
    }
    return newState

  case types.LOAD_IMAGE_FAILURE:
    newState = assign({}, state)
    newState[id].imageState = IMAGE_STATE_NONE
    return newState

  case types.CHANGE_CROP:
    newState = assign({}, state)
    newState[id].crop = action.crop
    return newState

  case types.CROP_IMAGE:
    newState = assign({}, state)
    newState[id] = {
      croppedImageUrl: action.croppedImageUrl,
      originalImage: null,
      originalImageWidth: 0,
      originalImageHeight: 0,
      filename: newState.imageInputs[id].filename,
      crop: {},
      imageState: IMAGE_STATE_CROPPED
    }
    return newState

  case types.CLEAR_IMAGE:
    newState = assign({}, state)
    newState[id] = {
      originalImage: null,
      originalImageWidth: 0,
      originalImageHeight: 0,
      filename: null,
      crop: {},
      croppedImageUrl: '',
      imageState: IMAGE_STATE_NONE
    }
    return newState

  default:
    return state
  }
}
