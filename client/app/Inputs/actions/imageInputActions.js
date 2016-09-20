import loadImageFromFile from '../../lib/image_processing/loadImageFromFile'
import * as types from '../../lib/constants/actionTypes'

export const changeCropAction = function(id, crop) {
  return {
    type: types.CHANGE_CROP,
    id,
    crop
  }
}

export const cropImageAction = function(id, croppedImageUrl, scaleToX, scaleToY) {
  return {
    type: types.CROP_IMAGE,
    id,
    croppedImageUrl,
    scaleToX,
    scaleToY
  }
}

export const clearImageAction = function(id) {
  return {
    type: types.CLEAR_IMAGE,
    id
  }
}

export const loadImageStartAction = function(id) {
  return {
    type: types.LOAD_IMAGE_START,
    id
  }
}

export const loadImageFailureAction = function(id, error) {
  return {
    type: types.LOAD_IMAGE_FAILURE,
    id,
    error
  }
}

export const loadImageSuccessAction = function(id, image, aspect, filename) {
  return {
    type: types.LOAD_IMAGE_SUCCESS,
    id,
    image,
    aspect,
    filename
  }
}

// Asynchronous action
export const loadImageAction = function(id, file, aspect) {
  return function(dispatch) {
    dispatch(loadImageStartAction(id))

    loadImageFromFile(file, function(image) {
      dispatch(loadImageSuccessAction(id, image, aspect, file.name))
    })
  }
}

export default loadImageAction
