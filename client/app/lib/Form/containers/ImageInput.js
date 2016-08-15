import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'

import cropImage from '../../image_processing/cropImage'
import loadImageAction, { changeCropAction, cropImageAction } from '../actions/imageInputActions'
import updateAction from '../actions/updateAction'
import ImageInputComponent from '../components/ImageInputComponent'

const mapStateToProps = function(state, ownProps) {
  const formObjectName = ownProps.object.constructor.name
  const attrs = ownProps.object.attributes

  let errors = null

  if (state[formObjectName] && state[formObjectName].errors) {
    errors = state[formObjectName].errors[ownProps.attribute] || []
  }
  errors = compact(concat(errors, ownProps.serverErrors))

  let value = null
  if (ownProps.submodel && attrs[ownProps.submodel]) {
    value = attrs[ownProps.submodel][ownProps.attribute] || ''
  } else {
    value = attrs[ownProps.attribute] || ''
  }

  const {imageState, originalImage, originalImageWidth, originalImageHeight, crop,
    croppedImageUrl} = state.imageInputs[ownProps.attribute]

  return {
    imageState,
    originalImage,
    originalImageWidth,
    originalImageHeight,
    crop,
    croppedImageUrl,
    errors,
    value,
    formObjectName
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  const { formObjectName, attribute, submodel, aspectRatio } = ownProps

  const id = attribute  // attribute serves as id for the store

  return {
    handleFileSelect(e) {
      e.preventDefault()
      const file = e.target.files[0]
      dispatch(loadImageAction(id, file, aspectRatio))
    },

    handleChangeCrop: function(crop) {
      dispatch(changeCropAction(id, crop))
    },

    dispatch
  }
}

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { formObjectName, originalImage, crop } = stateProps
  const { attribute, submodel, scaleToX, scaleToY } = ownProps
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
      dispatch(updateAction(formObjectName, attribute, submodel, croppedImageUrl))
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
