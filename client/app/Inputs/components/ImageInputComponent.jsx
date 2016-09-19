import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import ImageDropzone from './ImageDropzone'
import ImagePreview from './ImagePreview'
import ImageCrop from './ImageCrop'
import {
  IMAGE_STATE_NONE, IMAGE_STATE_LOADING, IMAGE_STATE_LOADED,
  IMAGE_STATE_CROPPED
} from '../reducers/imageInputReducer'

export default class ImageInputComponent extends ChildComponent {
  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,

    imageState: PropTypes.number,
    originalImage: PropTypes.object,
    originalImageWidth: PropTypes.number,
    originalImageHeight: PropTypes.number,
    crop: PropTypes.object,
    croppedImageUrl: PropTypes.string,

    onDropFile: PropTypes.func.isRequired,
    handleChangeCrop: PropTypes.func.isRequired,
    handleFinishCrop: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,

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
      imageState, originalImage, originalImageWidth, originalImageHeight, crop,
      croppedImageUrl, previewArea, onDropFile, handleChangeCrop, handleFinishCrop,
      onCancelClick, className, type
    } = this.props

    let modalElement
    if (imageState === IMAGE_STATE_LOADED) {
      const cropComponentWidth = (previewArea / originalImageHeight) *
        Math.sqrt((originalImageWidth * originalImageHeight) / previewArea)
      modalElement = (
        <ImageCrop
          width={cropComponentWidth}
          src={originalImage.src}
          crop={crop}
          onComplete={handleChangeCrop}
          handleFinishCrop={handleFinishCrop}
          onCancelClick={onCancelClick}
        />
      )
    } else {
      modalElement = (
        <div className="o-layout">
          <div className="o-layout__item u-1/2@m">
            <ImageDropzone onDropFile={onDropFile} />
          </div>
          <div className="o-layout__item u-1/2@m">
            <ImagePreview
              type={type}
              url={croppedImageUrl}
              loading={imageState === IMAGE_STATE_LOADING ? true : false}
            />
          </div>
        </div>
      )
    }

    let combinedClassName = 'c-image-input'
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <div className={combinedClassName}>
        {modalElement}
      </div>
    )
  }
}
