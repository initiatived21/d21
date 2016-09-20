import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import { updateAction } from 'rform'

import cropImage from '../../lib/image_processing/cropImage'
import loadImageAction, { changeCropAction, cropImageAction, clearImageAction }
  from '../actions/imageInputActions'
import { IMAGE_STATE_CROPPED } from '../reducers/imageInputReducer'
import ImageInputComponent from '../components/ImageInputComponent'

const mapStateToProps = function(state, ownProps) {
  const formId = ownProps.formId
  const attrs = state[ownProps.formId]

  let errors = null

  if (state[formId] && state[formId].errors) {
    errors = state[formId].errors[ownProps.attribute] || []
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
      dispatch(changeCropAction(id, crop))
    },
    onDropFile(files) {
      const file = files[0]
      dispatch(loadImageAction(id, file, aspectRatio))
    },
    onCancelClick(event) {
      event.preventDefault()
      dispatch(clearImageAction(id))
    },
    onRemoveFileClick(event) {
      event.preventDefault()
      dispatch(clearImageAction(id))
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
      const croppedImageUrl = cropImage(
        originalImage,
        crop,
        scaleToX,
        scaleToY
      )

      dispatch(cropImageAction(id, croppedImageUrl, scaleToX, scaleToY))
      dispatch(updateAction(formId, attribute, submodel, croppedImageUrl))
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ImageInputComponent)
connected.isInput = true

export default connected
