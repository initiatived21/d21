# There shall only ever be one store according to the Redux design
reducer = require('../reducers/pledgeFormSubmit')
module.exports = require('redux').createStore(reducer)
