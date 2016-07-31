import React, { PropTypes, Component } from 'react'
import ImageCrop from './ImageCrop'

const
  IMAGE_STATE_NONE = 0,
  IMAGE_STATE_LOADING = 1,
  IMAGE_STATE_LOADED = 2,
  IMAGE_STATE_CROPPED = 3

export default class ImageInputComponent extends Component {
  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    className: PropTypes.string,

    imageState: PropTypes.number,
    originalImage: PropTypes.object,
    originalImageWidth: PropTypes.number,
    originalImageHeight: PropTypes.number,
    crop: PropTypes.object,
    croppedImageUrl: PropTypes.string,

    handleFileSelect: PropTypes.func.isRequired,
    handleChangeCrop: PropTypes.func.isRequired,
    handleFinishCrop: PropTypes.func.isRequired,

    aspectRatio: PropTypes.number.isRequired,
    scaleToX: PropTypes.number.isRequired,
    scaleToY: PropTypes.number.isRequired,
    previewArea: PropTypes.number
  }

  static defaultProps = {
    previewArea: 100000
  }

  render() {
    const {
      imageState, originalImage, originalImageWidth, originalImageHeight, crop, croppedImageUrl,
      previewArea, handleFileSelect, handleChangeCrop, handleFinishCrop } = this.props

    let fileValueProps = {}
    let imagePreview = null
    switch(imageState) {
      case IMAGE_STATE_NONE:
      case IMAGE_STATE_LOADING:
        imagePreview = (
          <p className="c-image-input__text">
            Bitte wählen Sie ein Bild aus.
          </p>
        )
        break

      case IMAGE_STATE_LOADED:
        const cropComponentWidth = (previewArea / originalImageHeight) *
          Math.sqrt((originalImageWidth * originalImageHeight) / previewArea)
        imagePreview = (
          <ImageCrop
            width={cropComponentWidth}
            src={originalImage.src}
            crop={crop}
            onComplete={handleChangeCrop}
            handleFinishCrop={handleFinishCrop}
          />
        )
        break

      case IMAGE_STATE_CROPPED:
        imagePreview = (
          <div className="c-image-input__preview">
            <img src={croppedImageUrl} width="150" height="150" />
          </div>
        )
        // Clear file input when crop is done so change is detected even if the same image is
        // selected
        fileValueProps = { value: '' }
        break
      
      default:
        imagePreview = null
    }

    return (
      <div className="c-image-input">
        <input
          className="u-mb-small"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          {...fileValueProps}
        />
        {imagePreview}
      </div>
    )
  }
}
