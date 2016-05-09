// { combineReducers } = require('redux')
//
// pledgeFormSubmit = require('./pledgeFormSubmit')
// pledgeAddition = require('./pledgeAddition')
//
// module.exports = combineReducers({
//   pledgeFormSubmit
//   pledgeAddition
// })

import merge from 'lodash/merge';

export default function(state = { pledges: {} }, action) {
  switch (action.type) {
    case 'ADD_ENTITIES':
      return merge({}, state, action.entities);

    case 'SET_ENTITY':
      let newState = merge({}, state);
      newState[`${action.entityType}s`][action.entityId] = action.entity;
      return newState;

    case 'UPDATE_PLEDGE_ATTRIBUTE':
      newState = merge({}, state);
      newState.pledges[action.id][action.attribute] = action.value;
      return newState;

    // when 'SUBMIT_PLEDGE_FORM'
    //   console.log('handling submitted pledge form', state)
    //   retst = Object.assign {}, state, foo: action.formData.content
    //   console.log retst
    //   return retst

    default:
      return state;
  }
};
