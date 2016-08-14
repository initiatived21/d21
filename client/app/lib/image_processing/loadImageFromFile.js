/**
 *  Asynchronous function
 *  Reads image from file and loads it
 *  Used for image crop tool
 */

function loadImageFromFile(file, callback) {
  // Todo: polyfill for IE9
  const reader = new FileReader()

  reader.onloadend = function() {
    const image = new Image()
    image.src = reader.result

    image.onload = function() {
      callback(this)
    }
  }

  reader.readAsDataURL(file)
}

export default loadImageFromFile
