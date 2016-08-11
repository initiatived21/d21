/**
 *  Opens a new window with the specified URL
 */

function openWindow(url) {
  if (typeof global.window !== 'undefined') {
    openWindowWithUrl(url)
  }
  else {
    throw new Error('Opening windows not possible in server environment')
  }
}

function openWindowWithUrl(url) {
  const windowName = '_blank'
  const windowSizeX = '600'
  const windowSizeY = '460'
  const windowSize = `width=${windowSizeX},height=${windowSizeY}`
  global.window.open(url, windowName, windowSize)
}

export default openWindow
