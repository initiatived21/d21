/**
 *  Returns path with locale prefix
 */

import I18n from 'i18n-js'

function localPath(path) {
  return '/' + I18n.locale + pathWithLeadingSlash(path)
}

function pathWithLeadingSlash(path) {
  if (path.charAt(0) !== '/') {
    return '/' + path
  }
  else {
    return path
  }
}

export default localPath
