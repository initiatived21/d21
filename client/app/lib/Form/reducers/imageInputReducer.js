import assign from 'lodash/assign'
import forIn from 'lodash/forIn'

import calculateDefaultCrop from '../../utilities/calculate_default_crop'
import cropImage from '../../utilities/crop_image'

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
    case 'LOAD_IMAGE_START':
      newState.imageInputs[id].imageState = IMAGE_STATE_LOADING
      return newState

    case 'LOAD_IMAGE_SUCCESS':
      const originalImage = action.image
      const crop = calculateDefaultCrop(originalImage.width, originalImage.height, 1)

      newState.imageInputs[id] = {
        originalImage,
        originalImageWidth: originalImage.width,
        originalImageHeight: originalImage.height,
        crop,
        imageState: IMAGE_STATE_LOADED
      }
      return newState

    case 'LOAD_IMAGE_FAILURE':
      newState.imageInputs[id].imageState = IMAGE_STATE_NONE
      return newState

    case 'CHANGE_CROP':
      newState.imageInputs[id].crop = action.crop
      return newState

    case 'CROP_IMAGE':
      const croppedImageUrl = cropImage(
        state.imageInputs[id].originalImage,
        state.imageInputs[id].crop,
        action.scaleToX,
        action.scaleToY
      )

      newState.imageInputs[id] = {
        croppedImageUrl,
        originalImage: null,
        originalImageWidth: 0,
        originalImageHeight: 0,
        crop: {},
        imageState: IMAGE_STATE_CROPPED
      }
      return newState

    // Theoretical action – is not present in UI at the moment
    case 'CLEAR_IMAGE':
      newState.imageInputs[id] = { 
        originalImage: null,
        originalImageWidth: 0,
        originalImageHeight: 0,
        crop: {},
        croppedImageUrl: '',
        imageState: IMAGE_STATE_NONE
      }
      return newState

    default:
      return newState
  }
}
