import assign from 'lodash/assign'
import forIn from 'lodash/forIn'

import calculateDefaultCrop from '../../utilities/calculate_default_crop'
import cropImage from '../../utilities/crop_image'

const
  IMAGE_STATE_NONE = 0,
  IMAGE_STATE_LOADING = 1,
  IMAGE_STATE_LOADED = 2,
  IMAGE_STATE_CROPPED = 3

export const initialImageInputState = {
  imageInput: {
    imageState: IMAGE_STATE_NONE,
    originalImage: null,
    originalImageWidth: 0,
    originalImageHeight: 0,
    crop: {},
    croppedImageUrl: ''
  }
}

export default function imageInputReducer(state = initialImageInputState, action) {
  let newState = assign({}, state)

  switch (action.type) {
    // At the moment we do noting here in the UI
    case 'LOAD_IMAGE_START':
      newState.imageInput.imageState = IMAGE_STATE_LOADING
      return newState

    case 'LOAD_IMAGE_SUCCESS':
      const originalImage = action.image
      const crop = calculateDefaultCrop(originalImage.width, originalImage.height, 1)

      assign(newState, {
        imageInput: {
          originalImage,
          originalImageWidth: originalImage.width,
          originalImageHeight: originalImage.height,
          crop,
          imageState: IMAGE_STATE_LOADED
        }
      })
      return newState

    case 'LOAD_IMAGE_FAILURE':
      newState.imageInput.imageState = IMAGE_STATE_NONE
      return newState

    case 'CHANGE_CROP':
      newState.imageInput.crop = action.crop
      return newState

    case 'CROP_IMAGE':
      const croppedImageUrl = cropImage(
        state.imageInput.originalImage,
        state.imageInput.crop,
        action.scaleToX,
        action.scaleToY
      )

      assign(newState, {
        imageInput: { 
          croppedImageUrl,
          originalImage: null,
          originalImageWidth: 0,
          originalImageHeight: 0,
          crop: {},
          imageState: IMAGE_STATE_CROPPED
        }
      })
      return newState

    // Theoretical action – is not present in UI at the moment
    case 'CLEAR_IMAGE':
      assign(newState, {
        imageInput: { 
          originalImage: null,
          originalImageWidth: 0,
          originalImageHeight: 0,
          crop: {},
          croppedImageUrl: '',
          imageState: IMAGE_STATE_NONE
        }
      })
      return newState

    default:
      return newState
  }
}
