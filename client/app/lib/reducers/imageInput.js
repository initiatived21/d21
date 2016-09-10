import assign from 'lodash/assign'
import * as types from '../../lib/constants/actionTypes'
import calculateDefaultCrop from '../../lib/image_processing/calculateDefaultCrop'

export const IMAGE_STATE_NONE = 0
export const IMAGE_STATE_LOADING = 1
export const IMAGE_STATE_LOADED = 2
export const IMAGE_STATE_CROPPED = 3

export default function imageInputs(state={}, action) {
  let originalImage, aspect, crop

  switch (action.type) {
  case types.LOAD_IMAGE_START:
    if (state.id !== action.id) {
      return state
    }

    return assign({}, state, { imageState: IMAGE_STATE_LOADING})

  case types.LOAD_IMAGE_SUCCESS:
    if (state.id !== action.id) {
      return state
    }

    originalImage = action.image
    aspect = action.aspect
    crop = calculateDefaultCrop(originalImage.width, originalImage.height, aspect)

    return {
      id: state.id,
      originalImage,
      originalImageWidth: originalImage.width,
      originalImageHeight: originalImage.height,
      crop,
      imageState: IMAGE_STATE_LOADED
    }

    return newState

  case types.LOAD_IMAGE_FAILURE:
    if (state.id !== action.id) {
      return state
    }

    return assign({}, state, { imageState: IMAGE_STATE_NONE })

  case types.CHANGE_CROP:
    if (state.id !== action.id) {
      return state
    }

    return assign({}, state, { crop: action.crop })

  case types.CROP_IMAGE:
    if (state.id !== action.id) {
      return state
    }

    return {
      id: state.id,
      imageState: IMAGE_STATE_CROPPED,
      croppedImageUrl: action.croppedImageUrl
    }

  // Theoretical action – is not present in UI at the moment
  case types.CLEAR_IMAGE:
    if (state.id !== action.id) {
      return state
    }

    return {
      id: state.id
    }

  default:
    return state
  }
}
