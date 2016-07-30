import React, { PropTypes, Component } from 'react'
import ImageCrop from './ImageCrop'
import readImageFromFile from '../../utilities/read_image_from_file'
import cropImage from '../../utilities/crop_image'
import calculateDefaultCrop from '../../utilities/calculate_default_crop'

export default class ImageInputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
      previewReady: false
    }

    this.onComplete = this.onComplete.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    className: PropTypes.string,
    aspectRatio: PropTypes.number.isRequired,
    scaleToX: PropTypes.number.isRequired,
    scaleToY: PropTypes.number.isRequired,
    previewArea: PropTypes.number
  }

  static defaultProps = {
    previewArea: 100000
  }

  handleImageChange(e) {
    e.preventDefault()

    const
      file = e.target.files[0]
      self = this

    readImageFromFile(file, function(image) {
      const crop = calculateDefaultCrop(image.width, image.height, self.props.aspectRatio)

      self.setState({
        file,
        imagePreviewUrl: image.src,
        croppedImagePreviewUrl: '',
        width: image.width,
        height: image.height,
        crop,
        previewReady: false
      })
    })
  }

  onComplete(crop) {
    this.setState({
      crop
    })
  }

  onButtonClick(e) {
    e.preventDefault()

    const { imagePreviewUrl, crop } = this.state
    const { scaleToX, scaleToY } = this.props

    const self = this

    cropImage(imagePreviewUrl, crop, scaleToX, scaleToY, function(croppedImageUrl) {
      self.setState({
        previewReady: true,
        imagePreviewUrl: '',
        croppedImagePreviewUrl: croppedImageUrl
      })

      // update store
      self.props.onChange(
        self.props.formObjectName, self.props.attribute, self.props.submodel, croppedImageUrl
      )
    })
  }

  render() {
    let { imagePreviewUrl, croppedImagePreviewUrl, width, height, crop, previewReady } = this.state
    let imagePreview = null

    const { previewArea } = this.props
    let styleWidth = (previewArea / height) * Math.sqrt((width * height) / previewArea)

    if (previewReady) {
      imagePreview = (
        <div className="c-image-input__preview">

          <img src={croppedImagePreviewUrl} width="150" height="150" />
        </div>
      )
    }
    else
    {
      if (imagePreviewUrl) {
        imagePreview = (
          <ImageCrop
            width={styleWidth}
            src={imagePreviewUrl}
            crop={crop}
            onComplete={this.onComplete}
            onButtonClick={this.onButtonClick}
          />
        )
      } else {
        imagePreview = (
          <p className="c-image-input__text">
            Bitte wählen Sie ein Bild aus.
          </p>
        )
      }
    }

    // Clear file input when crop is done so change is detected even if the same image is
    // selected
    const fileValueProps = previewReady ? { value: '' } : {}

    return (
      <div className="c-image-input">
        <input
          className="u-mb-small"
          type="file"
          accept="image/*"
          onChange={(e)=>this.handleImageChange(e)}
          {...fileValueProps}
        />
        {imagePreview}
      </div>
    )
  }
}
