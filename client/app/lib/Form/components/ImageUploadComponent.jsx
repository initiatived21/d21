import React, { PropTypes, Component } from 'react'
import ReactCrop from 'react-image-crop'

export default class ImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      croppedImagePreviewUrl: '',
      width: 0,
      height: 0,
      crop: {
        x: 0,
        y: 0,
        width: 100,
        aspect: 1
      },
      geometry: '0x0+0+0',
      previewReady: false
    };

    this.onComplete = this.onComplete.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.cropImage = this.cropImage.bind(this)
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      const image_url = reader.result

      const image = new Image()
      image.src = image_url

      const self = this

      image.onload = function() {
        self.setState({
          file: file,
          imagePreviewUrl: image_url,
          croppedImagePreviewUrl: '',
          width: this.width,
          height: this.height,
          crop: {
            x: 0,
            y: 0,
            width: 100,
            aspect: 1
          },
          previewReady: false
        })
      }
    }

    reader.readAsDataURL(file)
  }

  onComplete(crop) {
    const
      imageWidthPx = this.state.width,
      imageHeightPx = this.state.height,
      offsetX = crop.x,
      offsetY = crop.y,
      width = crop.width,
      height = crop.height

    const
      offsetXPx = Math.floor(imageWidthPx * offsetX / 100),
      offsetYPx = Math.floor(imageHeightPx * offsetY / 100),
      widthPx = Math.floor(imageWidthPx * width / 100),
      heightPx = Math.floor(imageHeightPx * height / 100)

    const geometry = `${widthPx}x${heightPx}+${offsetXPx}+${offsetYPx}`

    this.setState({
      crop: crop,
      geometry: geometry
    })
  }

  onButtonClick(e) {
    e.preventDefault()

    const image = new Image()
    const self = this

    this.cropImage(image, this.state.imagePreviewUrl, this.state.crop)

    image.onload = function() {
      self.setState({
        previewReady: true,
        croppedImagePreviewUrl: image.src
      })
    }
  }

  loadImage(src, callback) {
    let image = new Image()

    image.onload = function(e) {
      callback(image)
      image = null
    }

    image.src = src
  }

  cropImage(imgDest, imgSrc, crop) {
    this.loadImage(imgSrc, cropAfterLoad.bind(this))

    function cropAfterLoad (loadedImg) {
      const imageWidth = loadedImg.naturalWidth
      const imageHeight = loadedImg.naturalHeight

      const cropX = (crop.x / 100) * imageWidth
      const cropY = (crop.y / 100) * imageHeight

      const cropWidth = (crop.width / 100) * imageWidth
      const cropHeight = (crop.height / 100) * imageHeight

      const canvas = document.createElement('canvas')
      canvas.width = cropWidth
      canvas.height = cropHeight
      const ctx = canvas.getContext('2d')

      ctx.drawImage(loadedImg, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight)

      imgDest.src = canvas.toDataURL('image/jpeg')
    }
  }

  render() {
    let { imagePreviewUrl, croppedImagePreviewUrl, width, height, crop, previewReady } = this.state
    let imagePreview = null

    const previewArea = 90000  // Set 90000 Pixels for the preview area, calculate width from that
    let styleWidth = (previewArea / height) * Math.sqrt((width * height) / previewArea)

    if (previewReady) {
      imagePreview = (
        <div className="c-image-upload__preview" style={{ width: '150px' }}>
          <img src={croppedImagePreviewUrl} width="150" height="150" />
        </div>
      )
    }
    else
    {
      if (imagePreviewUrl) {
        imagePreview = (
          <div className="c-image-upload__preview" style={{ width: `${styleWidth}px` }}>
            <ReactCrop
              src={imagePreviewUrl}
              crop={crop}
              minWidth={30}
              minHeight={30}
              keepSelection
              onComplete={this.onComplete}
            />
            <button type="button" onClick={this.onButtonClick}>
              Fertig
            </button>
          </div>
        )
      } else {
        imagePreview = (
          <div className="c-image-upload__preview">
            <p className="c-image-upload__preview-text">
              Bitte wählen Sie ein Bild aus. Danach können Sie es noch beschneiden.
            </p>
          </div>
        )
      }
    }

    return (
      <div className="c-image-upload">
        <input type="hidden" name="crop_geometry" value={this.state.geometry} />
        <input className="" type="file" onChange={(e)=>this._handleImageChange(e)} />
        {imagePreview}
      </div>
    )
  }
}
