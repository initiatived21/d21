import { connect } from 'react-redux'
import concat from 'lodash/concat'
import compact from 'lodash/compact'
import merge from 'lodash/merge'
import { updateAction } from 'rform'

import cropImageFunction from '../../lib/image_processing/cropImage'
import loadImage, { changeCrop, cropImage, clearImage }
  from '../actions/imageInputActions'
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
    attrs,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch,
  }
}

const mergeProps = function(stateProps, dispatchProps, ownProps) {
  const { originalImage, crop, attrs } = stateProps
  const {
    formId, attribute, submodel, scaleToX, scaleToY, aspectRatio,
    formObjectClass
  } = ownProps
  const { dispatch } = dispatchProps

  const id = attribute  // attribute serves as id for the store

  const validate = () => {
    const formObject = new formObjectClass(stateProps.attrs)
    formObject.validate(attribute)
    const errorKey = formObject.errorKey(attribute, submodel)
    const errors = formObject.attributes.errors[errorKey]

    if (!errors && (!attrs.errors || !attrs.errors[errorKey])) return
    dispatchProps.dispatch(updateAction(formId, errorKey, 'errors', errors))
  }


  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    onDropFile(files) {
      const file = files[0]
      dispatch(loadImage(id, file, aspectRatio))
      dispatch(updateAction(formId, 'cropping', submodel, attribute))
    },

    handleChangeCrop: function(crop) {
      dispatch(changeCrop(id, crop))
      dispatch(updateAction(formId, 'cropping', submodel, null))
    },

    onCancelClick(event) {
      event.preventDefault()
      dispatch(clearImage(id))
      dispatch(updateAction(formId, 'cropping', submodel, null))
      validate()
    },

    handleFinishCrop: function() {
      const croppedImageUrl = cropImageFunction(
        originalImage,
        crop,
        scaleToX,
        scaleToY
      )
      dispatch(cropImage(id, croppedImageUrl, scaleToX, scaleToY))
      dispatch(updateAction(formId, attribute, submodel, croppedImageUrl))
      dispatch(updateAction(formId, 'cropping', submodel, null))
      dispatch(updateAction(formId, `remove_${attribute}`, submodel, '0'))
      validate()
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
