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
      }
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
          height: this.height
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

    this.setState({
      crop: crop
    })

    const geometry = `${widthPx}x${heightPx}+${offsetXPx}+${offsetYPx}`
    console.log(geometry)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <ReactCrop
          src={imagePreviewUrl}
          crop={this.state.crop}
          minWidth={30}
          minHeight={30}
          keepSelection
          onComplete={this.onComplete}
        />
      )
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="c-image-upload">
        <input className="" type="file" onChange={(e)=>this._handleImageChange(e)} />
        <div className="c-image-upload__preview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
