import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import { updateAction } from 'rform'

import cropImageFunction from '../../lib/image_processing/cropImage'
import loadImage, { changeCrop, cropImage, clearImage } from '../actions/imageInputActions'
import { IMAGE_STATE_CROPPED } from '../../lib/reducers/imageInput'
import ImageInputComponent from '../components/ImageInputComponent'

const mapStateToProps = function(state, ownProps) {
  const formId = ownProps.formId
  const attrs = state.rform[ownProps.formId]

  let errors = null

  if (state.rform[formId] && state.rform[formId].errors) {
    errors = state.rform[formId].errors[ownProps.attribute] || []
  }
  errors = compact(concat(errors, ownProps.serverErrors))


  let value = ''
  if (attrs && ownProps.submodel && attrs[ownProps.submodel]) {
    value = attrs[ownProps.submodel][ownProps.attribute] || ''
  } else if (attrs) {
    value = attrs[ownProps.attribute] || ''
  }

  let {
    imageState, originalImage, originalImageWidth, originalImageHeight, filename,
    crop, croppedImageUrl
  } = state.imageInputs[ownProps.attribute]

  if (!croppedImageUrl && attrs && attrs.image && attrs.image.image && attrs.image.image.url) {
    // TODO: Does this work for submodels?
    imageState = IMAGE_STATE_CROPPED
    croppedImageUrl = attrs.image.image.url
  }

  return {
    imageState,
    originalImage,
    originalImageWidth,
    originalImageHeight,
    filename,
    crop,
    croppedImageUrl,
    errors,
    value,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  const { attribute, aspectRatio } = ownProps

  const id = attribute  // attribute serves as id for the store

  return {
    handleChangeCrop: function(crop) {
      dispatch(changeCrop(id, crop))
    },
    onDropFile(files) {
      const file = files[0]
      dispatch(loadImage(id, file, aspectRatio))
    },
    onCancelClick(event) {
      event.preventDefault()
      dispatch(clearImage(id))
    },
    dispatch,
  }
}

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { originalImage, crop } = stateProps
  const { formId, attribute, submodel, scaleToX, scaleToY } = ownProps
  const { dispatch } = dispatchProps

  const id = attribute  // attribute serves as id for the store

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    handleFinishCrop: function() {
      const croppedImageUrl = cropImageFunction(
        originalImage,
        crop,
        scaleToX,
        scaleToY
      )
      dispatch(cropImage(id, croppedImageUrl, scaleToX, scaleToY))
      dispatch(updateAction(formId, attribute, submodel, croppedImageUrl))
      dispatch(updateAction(formId, `remove_${attribute}`, submodel, '0'))
    },
    onRemoveFileClick(event) {
      event.preventDefault()
      dispatch(clearImage(id))
      // Set hidden input field to remove image from server
      dispatch(updateAction(formId, `remove_${attribute}`, submodel, '1'))
    },
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ImageInputComponent)
connected.isInput = true

export default connected
