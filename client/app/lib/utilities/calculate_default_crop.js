/**
 *  Calculates an initial crop area (maximal size, center-positioned)
 *  for any image.
 *  Used for image crop tool
 */

function calculateDefaultCrop(imgWidth, imgHeight, aspectRatio) {
  let cropWidth, cropHeight, cropX, cropY

  if (imgWidth > imgHeight) {
    cropWidth = (100 / imgWidth) * imgHeight * aspectRatio
    cropHeight = 100
    cropX = (100 - cropWidth) / 2
    cropY = 0
  }
  else {
    cropWidth = 100
    cropHeight = (100 / imgHeight) * imgWidth * aspectRatio
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

export default calculateDefaultCrop
