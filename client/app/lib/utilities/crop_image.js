/**
 *  Crop image function
 *  Used for image crop tool
 */

function cropImage(imgSrc, crop, maxWidth, maxHeight, callback) {
  loadImage(imgSrc, cropAfterLoad)

  function cropAfterLoad(loadedImg) {
    const
      imageWidth = loadedImg.naturalWidth,
      imageHeight = loadedImg.naturalHeight,

      cropX = (crop.x / 100) * imageWidth,
      cropY = (crop.y / 100) * imageHeight,

      cropWidth = (crop.width / 100) * imageWidth,
      cropHeight = (crop.height / 100) * imageHeight

    let
      destWidth = cropWidth,
      destHeight = cropHeight

    if (maxWidth || maxHeight) {
      // Scale the crop.
      const scaledCrop = scale({
        width: cropWidth,
        height: cropHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight
      })

      // Scale the image based on the crop scale.
      const scaledImage = scale({
        scale: scaledCrop.scale,
        width: imageWidth,
        height: imageHeight
      })

      destWidth = scaledCrop.width
      destHeight = scaledCrop.height
    }

    const canvas = document.createElement('canvas')
    canvas.width = destWidth
    canvas.height = destHeight

    const ctx = canvas.getContext('2d')
    ctx.drawImage(loadedImg, cropX, cropY, cropWidth, cropHeight, 0, 0, destWidth, destHeight)

    const imgDest = canvas.toDataURL('image/jpeg')
    callback(imgDest)
  }
}

function loadImage(src, callback) {
  let image = new Image()

  image.onload = function(e) {
    callback(image)
    image = null
  }

  image.src = src
}

function scale(options) {
  let scale = options.scale ||
    Math.min(options.maxWidth/options.width, options.maxHeight/options.height)

  scale = Math.min(scale, options.maxScale || 1)

  return {
    scale,
    width: options.width * scale,
    height: options.height * scale
  }
}

export default cropImage
