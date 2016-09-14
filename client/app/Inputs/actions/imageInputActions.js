import loadImageFromFile from '../../lib/image_processing/loadImageFromFile'
import * as types from '../../lib/constants/actionTypes'

export const changeCrop = function(id, crop) {
  return {
    type: types.CHANGE_CROP,
    id,
    crop
  }
}

export const cropImage = function(id, croppedImageUrl, scaleToX, scaleToY) {
  return {
    type: types.CROP_IMAGE,
    id,
    croppedImageUrl,
    scaleToX,
    scaleToY
  }
}

export const clearImage = function(id) {
  return {
    type: types.CLEAR_IMAGE,
    id
  }
}

export const loadImageStart = function(id) {
  return {
    type: types.LOAD_IMAGE_START,
    id
  }
}

export const loadImageFailure = function(id, error) {
  return {
    type: types.LOAD_IMAGE_FAILURE,
    id,
    error
  }
}

export const loadImageSuccess = function(id, image, aspect, filename) {
  return {
    type: types.LOAD_IMAGE_SUCCESS,
    id,
    image,
    aspect,
    filename
  }
}

// Asynchronous action
export const loadImage = function(id, file, aspect) {
  return function(dispatch) {
    dispatch(loadImageStart(id))

    loadImageFromFile(file, function(image) {
      dispatch(loadImageSuccess(id, image, aspect, file.name))
    })
  }
}

export default loadImage
