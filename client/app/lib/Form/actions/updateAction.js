export default (formObjectName, attribute, submodel, value) =>
  ({
    type: 'UPDATE_FORM_ATTRIBUTE',
    formObjectName,
    attribute,
    submodel,
    value
  })

