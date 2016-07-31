import loadImageFromFile from '../../utilities/load_image_from_file'

export const changeCropAction = function(id, crop) {
  return {
    type: 'CHANGE_CROP',
    id,
    crop
  }
}

// This one is synchronous (blocking)
export const cropImageAction = function(id, scaleToX, scaleToY) {
  return {
    type: 'CROP_IMAGE',
    id,
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

// This one needs to work asynchronously
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

const loadImageSuccessAction = function(id, image) {
  return {
    type: 'LOAD_IMAGE_SUCCESS',
    id,
    image
  }
}

export default function loadImageAction(id, file) {
  return function(dispatch) {
    dispatch(loadImageStartAction(id))

    loadImageFromFile(file, function(image) {
      dispatch(loadImageSuccessAction(id, image))
    })
  }
}


