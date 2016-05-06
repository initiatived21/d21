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

module.exports = (state = { pledges: {} }, action) ->
  switch action.type
    when 'ADD_ENTITIES'
      merge {}, state, action.entities

    when 'SET_ENTITY'
      newState = merge {}, state
      newState["#{action.entityType}s"][action.entityId] = action.entity
      newState

    when 'UPDATE_PLEDGE_ATTRIBUTE'
      newState = merge {}, state
      newState.pledges[action.id][action.attribute] = action.value
      newState

    # when 'SUBMIT_PLEDGE_FORM'
    #   console.log('handling submitted pledge form', state)
    #   retst = Object.assign {}, state, foo: action.formData.content
    #   console.log retst
    #   return retst

    else
      state
