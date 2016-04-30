# { combineReducers } = require('redux')
#
# pledgeFormSubmit = require('./pledgeFormSubmit')
# pledgeAddition = require('./pledgeAddition')
#
# module.exports = combineReducers({
#   pledgeFormSubmit
#   pledgeAddition
# })

merge = require('lodash/merge')

module.exports = (state = {}, action) ->
  switch action.type
    when 'ADD_ENTITIES'
      merge {}, state, action.entities

    # when 'SUBMIT_PLEDGE_FORM'
    #   console.log('handling submitted pledge form', state)
    #   retst = Object.assign {}, state, foo: action.formData.content
    #   console.log retst
    #   return retst

    else
      state
