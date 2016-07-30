import React, { PropTypes, Component } from 'react'
import ReactCrop from 'react-image-crop'
import readImageFromFile from '../../utilities/read_image_from_file'
import cropImage from '../../utilities/crop_image'

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

  getDefaultCrop(imgWidth, imgHeight, aspectRatio) {
    let cropWidth, cropHeight, cropX, cropY

    if (imgWidth > imgHeight) {
      cropWidth = (100 / imgWidth) * imgHeight
      cropHeight = 100
      cropX = (100 - cropWidth) / 2
      cropY = 0
    }
    else {
      cropWidth = 100
      cropHeight = (100 / imgHeight) * imgWidth
      cropX = 0
      cropY = (100 - cropHeight) / 2
    }

    return {
      x: cropX,
      y: cropY,
      width: cropWidth,
      height: cropHeight,
      aspect: aspectRatio
    }
  }

  handleImageChange(e) {
    e.preventDefault()

    const
      file = e.target.files[0]
      self = this

    readImageFromFile(file, function(image) {
      const crop = self.getDefaultCrop(image.width, image.height, self.props.aspectRatio)

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
          <div className="c-image-input__crop" style={{ width: `${styleWidth}px` }}>
            <ReactCrop
              src={imagePreviewUrl}
              crop={crop}
              minWidth={30}
              minHeight={30}
              keepSelection
              onComplete={this.onComplete}
            />
            <button className="o-btn o-btn--small" type="button" onClick={this.onButtonClick}>
              Fertig
            </button>
          </div>
        )
      } else {
        imagePreview = (
          <div className="c-image-input__upload">
            <p className="c-image-input__upload-text">
              Bitte wählen Sie ein Bild aus.
            </p>
          </div>
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
