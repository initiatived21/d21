import _ from 'lodash';

import pledge from './pledge.js';

export const initialState = {
  pledges: {},
  tags: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTITIES':
      return _.merge({}, state, action.entities);

    case 'SET_ENTITY':
      let newState = Object.assign({}, state);
      newState[`${action.entityType}s`][action.entityId] = action.entity;
      return newState;

    case 'UPDATE_PLEDGE_ATTRIBUTE':
      newState = Object.assign({}, state);
      newState.pledges[action.id][action.attribute] = action.value;
      return newState;

    default:
      return state;
  }
};
