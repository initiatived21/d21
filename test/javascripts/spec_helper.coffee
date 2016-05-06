# Teaspoon includes some support files, but you can use anything from your own support path too.
# require support/expect
#= require support/sinon
#= require support/chai
# require support/chai-jq-0.0.7
# require support/your-support-file
#
# PhantomJS (Teaspoons default driver) doesn't have support for Function.prototype.bind, which has caused confusion.
# Use this polyfill to avoid the confusion.
#= require support/phantomjs-shims
#
# You can require your own javascript files here. By default this will include everything in application, however you
# may get better load performance if you require the specific files that are being used in the spec that tests them.
#= require application
#= require react-addons-test-utils
#
# Deferring execution
# If you're using CommonJS, RequireJS or some other asynchronous library you can defer execution. Call
# Teaspoon.execute() after everything has been loaded. Simple example of a timeout:
#
# Teaspoon.defer = true
# setTimeout(Teaspoon.execute, 1000)
#
# Matching files
# By default Teaspoon will look for files that match _spec.{js,js.coffee,.coffee}. Add a filename_spec.js file in your
# spec path and it'll be included in the default suite automatically. If you want to customize suites, check out the
# configuration in teaspoon_env.rb
#
# Manifest
# If you'd rather require your spec files manually (to control order for instance) you can disable the suite matcher in
# the configuration and use this file as a manifest.
#
# For more information: http://github.com/modeset/teaspoon
#
# Chai
# If you're using Chai, you'll probably want to initialize your preferred assertion style. You can read more about Chai
# at: http://chaijs.com/guide/styles
#
# window.assert = chai.assert
# window.expect = chai.expect
window.should = chai.should()

# General requires
global.ReactDOM = require('react-dom')

# Fail on warnings
err = console.error
console.error = (warning) ->
  if (/(Invalid prop|Failed propType)/.test(warning))
    throw new Error(warning)

  err.apply(console, arguments)

# Helper Functions

## common render
_ = require('lodash')
{ TestUtils } = React.addons
defaultProps = {}

# makeComponent = (props, children = []) ->
#   element = React.createElement(ElementList, props, children)
#   TestUtils.renderIntoDocument element
global.render = (component, newProps, children, callback) ->
  props = _.merge(defaultProps, newProps)
  element = React.createElement(component, props, children)
  component = TestUtils.renderIntoDocument element
  console.log component
  if (typeof callback is 'function') then setTimeout(callback(component))

## default cleanup (default afterEach)
# global.cleanup = (done) ->
#   # ReactDOM.unmountComponentAtNode(document.body) # Assuming mounted to body
#   # document.body.innerHTML = ""                   # Just to be sure
#   setTimeout(done)

