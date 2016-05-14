export default (state = {id: undefined}, action) => {
  switch (action.type) {
    case 'UPDATE_PLEDGE_ATTRIBUTE':
      const updated_attribute = {};
      updated_attribute[action.attribute] = action.value;
      return Object.assign({}, state, updated_attribute);
    default:
      return state;
  }
};
