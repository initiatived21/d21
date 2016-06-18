export default (id, attribute, submodel, value) =>
  ({
    type: 'UPDATE_FORM_ATTRIBUTE',
    id,
    attribute,
    submodel,
    value
  })
;
