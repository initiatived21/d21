import assign from 'lodash/assign'
import forIn from 'lodash/forIn'
import * as types from '../../lib/constants/actionTypes'
import calculateDefaultCrop from '../../lib/image_processing/calculateDefaultCrop'

export const IMAGE_STATE_NONE = 0
export const IMAGE_STATE_LOADING = 1
export const IMAGE_STATE_LOADED = 2
export const IMAGE_STATE_CROPPED = 3

export const initialImageInputState = {
  imageInputs: {
    avatar: {
      imageState: IMAGE_STATE_NONE,
      originalImage: null,
      originalImageWidth: 0,
      originalImageHeight: 0,
      filename: null,
      crop: {},
      croppedImageUrl: ''
    },
    image: {
      imageState: IMAGE_STATE_NONE,
      originalImage: null,
      originalImageWidth: 0,
      originalImageHeight: 0,
      filename: null,
      crop: {},
      croppedImageUrl: ''
    }
  }
}

export default function imageInputReducer(state = initialImageInputState, action) {
  const newState = assign({}, state)
  const id = action.id

  switch (action.type) {
    // At the moment we do noting here in the UI
  case types.LOAD_IMAGE_START:
    newState.imageInputs[id].imageState = IMAGE_STATE_LOADING
    return newState

  case types.LOAD_IMAGE_SUCCESS:
    const originalImage = action.image, aspect = action.aspect
    const crop = calculateDefaultCrop(originalImage.width, originalImage.height, aspect)

    newState.imageInputs[id] = {
      originalImage,
      originalImageWidth: originalImage.width,
      originalImageHeight: originalImage.height,
      filename: action.filename,
      crop,
      imageState: IMAGE_STATE_LOADED
    }
    return newState

  case types.LOAD_IMAGE_FAILURE:
    newState.imageInputs[id].imageState = IMAGE_STATE_NONE
    return newState

  case types.CHANGE_CROP:
    newState.imageInputs[id].crop = action.crop
    return newState

  case types.CROP_IMAGE:
    newState.imageInputs[id] = {
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
    newState.imageInputs[id] = {
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
    return newState
  }
}
