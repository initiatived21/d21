import loadImageFromFile from '../../utilities/load_image_from_file'

export const changeCropAction = function(crop) {
  return {
    type: 'CHANGE_CROP',
    crop
  }
}


// This one is synchronous (blocking)
export const cropImageAction = function(scaleToX, scaleToY) {
  return {
    type: 'CROP_IMAGE',
    scaleToX,
    scaleToY
  }
}


// This one needs to work asynchronously
const loadImageStartAction = function() {
  return {
    type: 'LOAD_IMAGE_START'
  }
}

const loadImageFailureAction = function(error) {
  return {
    type: 'LOAD_IMAGE_FAILURE',
    error
  }
}

const loadImageSuccessAction = function(image) {
  return {
    type: 'LOAD_IMAGE_SUCCESS',
    image
  }
}

export default function loadImage(file) {
  return function(dispatch) {
    dispatch(loadImageStartAction())

    loadImageFromFile(file, function(image) {
      dispatch(loadImageSuccessAction(image))
    })
  }
}
