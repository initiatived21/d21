import loadImageFromFile from '../../utilities/load_image_from_file'

export const changeCropAction = function(id, crop) {
  return {
    type: 'CHANGE_CROP',
    id,
    crop
  }
}

export const cropImageAction = function(id, croppedImageUrl, scaleToX, scaleToY) {
  return {
    type: 'CROP_IMAGE',
    id,
    croppedImageUrl,
    scaleToX,
    scaleToY
  }
}

export const clearImageAction = function(id) {
  return {
    type: 'CLEAR_IMAGE',
    id
  }
}

const loadImageStartAction = function(id) {
  return {
    type: 'LOAD_IMAGE_START',
    id
  }
}

const loadImageFailureAction = function(id, error) {
  return {
    type: 'LOAD_IMAGE_FAILURE',
    id,
    error
  }
}

const loadImageSuccessAction = function(id, image, aspect) {
  return {
    type: 'LOAD_IMAGE_SUCCESS',
    id,
    image,
    aspect
  }
}

// Asynchronous action
export default function loadImageAction(id, file, aspect) {
  return function(dispatch) {
    dispatch(loadImageStartAction(id))

    loadImageFromFile(file, function(image) {
      dispatch(loadImageSuccessAction(id, image, aspect))
    })
  }
}
