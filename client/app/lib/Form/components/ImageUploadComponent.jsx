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
        const imgWidth = this.width, imgHeight = this.height

        let cropWidth, cropHeight, cropX, cropY
        const aspectRatio = 1

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

        console.log(imgWidth, imgHeight, cropWidth, cropHeight)

        self.setState({
          file: file,
          imagePreviewUrl: image_url,
          croppedImagePreviewUrl: '',
          width: imgWidth,
          height: imgHeight,
          crop: {
            x: cropX,
            y: cropY,
            width: cropWidth,
            height: cropHeight,
            aspect: 1
          },
          previewReady: false
        })
      }
    }

    reader.readAsDataURL(file)
  }

  onComplete(crop) {
    this.setState({
      crop
    })
  }

  onButtonClick(e) {
    e.preventDefault()

    const self = this

    this.cropImage(this.state.imagePreviewUrl, this.state.crop, 200, 200, function(croppedImage) {
      self.setState({
        previewReady: true,
        croppedImagePreviewUrl: croppedImage.src
      })
    })
  }

  loadImage(src, callback) {
    let image = new Image()

    image.onload = function(e) {
      callback(image)
      image = null
    }

    image.src = src
  }

  scale(options) {
    var scale = options.scale ||
      Math.min(options.maxWidth/options.width, options.maxHeight/options.height);

    scale = Math.min(scale, options.maxScale || 1);

    return {
      scale: scale,
      width: options.width * scale,
      height: options.height * scale
    };
  }

  cropImage(imgSrc, crop, maxWidth, maxHeight, callback) {
    this.loadImage(imgSrc, cropAfterLoad.bind(this))

    function cropAfterLoad (loadedImg) {
      var imageWidth = loadedImg.naturalWidth;
      var imageHeight = loadedImg.naturalHeight;

      var cropX = (crop.x / 100) * imageWidth;
      var cropY = (crop.y / 100) * imageHeight;

      var cropWidth = (crop.width / 100) * imageWidth;
      var cropHeight = (crop.height / 100) * imageHeight;

      var destWidth = cropWidth;
      var destHeight = cropHeight;

      if (maxWidth || maxHeight) {
          // Scale the crop.
          var scaledCrop = this.scale({
              width: cropWidth,
              height: cropHeight,
              maxWidth: maxWidth,
              maxHeight: maxHeight
          });

          // Scale the image based on the crop scale.
          var scaledImage = this.scale({
              scale: scaledCrop.scale,
              width: imageWidth,
              height: imageHeight
          });

          destWidth = scaledCrop.width;
          destHeight = scaledCrop.height;
      }

      var canvas = document.createElement('canvas');
      canvas.width = scaledCrop.width;
      canvas.height = scaledCrop.height;
      var ctx = canvas.getContext('2d');

      ctx.drawImage(loadedImg, cropX, cropY, cropWidth, cropHeight, 0, 0, destWidth, destHeight);


      const imgDest = new Image()

      // Polyfill needed!
      canvas.toBlob(function(blob) {
        var url = URL.createObjectURL(blob)

        imgDest.onload = function() {
          // URL.revokeObjectURL(url)
          // This should be called when the image is no longer needed
          // Memory leaks
          callback(this)
        }

        imgDest.src = url
      }, 'image/jpeg')
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
        <input className="" type="file" onChange={(e)=>this._handleImageChange(e)} />
        {imagePreview}
      </div>
    )
  }
}
