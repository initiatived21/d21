# There shall only ever be one store according to the Redux design
reducer = require('./reducers/combined')
module.exports = require('redux').createStore(
  reducer
  initialState = {}
)
