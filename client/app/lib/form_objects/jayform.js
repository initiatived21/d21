export default class JayForm {
  constructor(initialData = {}) {
    this.attributes = { errors: {} }

    for (let property of this.constructor.properties) {
      this.attributes[property] = null
    }

    const { submodelProperties } = this.constructor
    if (submodelProperties) {
      for (let submodel in submodelProperties) {
        this.attributes[submodel] = {}
        for (let property of submodelProperties[submodel]) {
          this.attributes[submodel][property] = null
        }
      }
    }

    for (let field of Object.keys(initialData)) {
      if (this.constructor.properties.includes(field)) {
        this.attributes[field] = initialData[field]
      }
    }

    if (submodelProperties) {
      for (let submodel in submodelProperties) {
        if (initialData.hasOwnProperty(submodel)) {
          for (let field in initialData[submodel]) {
            if (submodelProperties[submodel].includes(field)) {
              this.attributes[submodel][field] = initialData[submodel][field]
            }
          }
        }
      }
    }
  }

  static get model() {
    throw `FormObject ${this.name} needs to define a model name.`
  }

  static get submodels() {
    return []
  }

  get attributes() {
    return this._attributes
  }
  set attributes(attributes) {
    this._attributes = attributes
  }

  validate(attribute) {
    // TODO: implement!
    if (!this.attributes[attribute]) {
      return {[attribute]: ['must be filled']}
    }
    return {}
  }



  toFormData(form) {
    let formDataObject = new FormData()

    // Add stored props to FormData
    for (let property of this.constructor.properties) {
      formDataObject.set(
        `${this.constructor.model}[${property}]`,
        this.attributes[property] || ''
      )
    }

    // Add submodel props to FormData
    const { submodelProperties } = this.constructor
    if (submodelProperties) {
      for (let submodel in submodelProperties) {
        for (let property of submodelProperties[submodel]) {
          formDataObject.set(
            `${this.constructor.model}[${submodel}][${property}]`,
            this.attributes[submodel][property] || ''
          )
        }
      }
    }

    // Add meta data to FormData
    const metaFields = [ 'utf8', 'authenticity_token' ]
    for (let metaField of metaFields) {
      formDataObject.set(metaField, (form[metaField] && form[metaField].value))
    }
    const method = form._method ? form._method.value : 'POST'
    formDataObject.set('_method', method)

    return formDataObject
  }
}
