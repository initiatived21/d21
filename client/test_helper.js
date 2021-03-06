/* eslint no-console: 0 */

require('babel-register')()

// JSDOM setup
var jsdom = require('jsdom').jsdom

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

global.documentRef = document

// chai setup
var chai = require('chai')
global.should = chai.should()

// Fail on prop warnings
var err = console.error
console.error = function(warning) {
  if (/(Invalid prop|Failed propType)/.test(warning)) {
    throw new Error(warning)
  }

  err.apply(console, arguments)
}
