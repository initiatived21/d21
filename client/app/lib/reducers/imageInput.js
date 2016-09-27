import assign from 'lodash/assign'
import * as types from '../../lib/constants/actionTypes'
import calculateDefaultCrop from '../../lib/image_processing/calculateDefaultCrop'

export const IMAGE_STATE_NONE = 0
export const IMAGE_STATE_LOADING = 1
export const IMAGE_STATE_LOADED = 2
export const IMAGE_STATE_CROPPED = 3

export default function imageInputs(state={}, action) {
  let originalImage, aspect, crop

  if (state.id !== action.id) {
    return state
  }

  switch (action.type) {
  case types.LOAD_IMAGE_START:
    return assign({}, state, { imageState: IMAGE_STATE_LOADING})

  case types.LOAD_IMAGE_SUCCESS:
    originalImage = action.image
    aspect = action.aspect
    crop = calculateDefaultCrop(originalImage.width, originalImage.height, aspect)

    return {
      id: state.id,
      originalImage,
      originalImageWidth: originalImage.width,
      originalImageHeight: originalImage.height,
      filename: action.filename,
      crop,
      imageState: IMAGE_STATE_LOADED,
    }

    return newState

  case types.LOAD_IMAGE_FAILURE:
    return assign({}, state, { imageState: IMAGE_STATE_NONE })

  case types.CHANGE_CROP:
    return assign({}, state, { crop: action.crop })

  case types.CROP_IMAGE:
    return {
      id: state.id,
      imageState: IMAGE_STATE_CROPPED,
      croppedImageUrl: action.croppedImageUrl,
      filename: state.filename,
    }

  case types.CLEAR_IMAGE:
    return {
      id: state.id,
      imageState: IMAGE_STATE_NONE,
    }

  default:
    return state
  }
}
