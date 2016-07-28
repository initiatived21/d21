import React, { PropTypes, Component } from 'react'
import ReactCrop from 'react-image-crop'

export default class ImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      width: 0,
      height: 0,
      crop: {
        x: 0,
        y: 0,
        width: 100,
        aspect: 1
      },
      geometry: '0x0+0+0'
    };

    this.onComplete = this.onComplete.bind(this)
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
          width: this.width,
          height: this.height,
          crop: {
            x: 0,
            y: 0,
            width: 100,
            aspect: 1
          },
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

  }

  render() {
    let { imagePreviewUrl, width, height, crop } = this.state;
    let imagePreview = null;

    const previewArea = 90000  // Set 90000 Pixels for the preview area, calculate width from that
    let styleWidth = (previewArea / height) * Math.sqrt((width * height) / previewArea)

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

    return (
      <div className="c-image-upload">
        <input type="hidden" name="crop_geometry" value={this.state.geometry} />
        <input className="" type="file" onChange={(e)=>this._handleImageChange(e)} />
        {imagePreview}
      </div>
    )
  }
}
