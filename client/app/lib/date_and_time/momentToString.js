/**
 *  Converts moment.js date into string for store and server
 */

function momentToString(date) {
  return date
    .format()
    .substring(0, 10)
}

export default momentToString
