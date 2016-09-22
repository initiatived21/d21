/**
 *  Calculates an initial crop area (maximal size, center-positioned)
 *  for any image.
 *  Used for image crop tool
 */

function calculateDefaultCrop(imgWidth, imgHeight, cropAspectRatio) {
  let cropWidth, cropHeight, cropX, cropY
  const imageAspectRatio = imgWidth / imgHeight

  if (imgWidth > imgHeight) {
    if (imageAspectRatio > cropAspectRatio) {
      cropWidth = (100 / imgWidth) * imgHeight * cropAspectRatio
      cropHeight = 100
      cropX = (100 - cropWidth) / 2
      cropY = 0
    } else {
      cropWidth = 100
      cropHeight = (100 / imgHeight) * imgWidth / cropAspectRatio
      cropX = 0
      cropY = (100 - cropHeight) / 2
    }
  }
  else {
    if (imageAspectRatio > cropAspectRatio) {
      cropWidth = 100
      cropHeight = (100 / imgHeight) * imgWidth * cropAspectRatio
      cropX = 0
      cropY = (100 - cropHeight) / 2
    } else {
      cropWidth = 100
      cropHeight = (100 / imgHeight) * imgWidth / cropAspectRatio
      cropX = 0
      cropY = (100 - cropHeight) / 2
    }
  }

  return {
    x: cropX,
    y: cropY,
    width: cropWidth,
    height: cropHeight,
    aspect: cropAspectRatio
  }
}

export default calculateDefaultCrop
