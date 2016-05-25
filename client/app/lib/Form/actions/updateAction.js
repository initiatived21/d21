export default (id, attribute, submodel, value) =>
  ({
    type: 'UPDATE_PLEDGE_ATTRIBUTE',
    id,
    attribute,
    submodel,
    value
  })
;
