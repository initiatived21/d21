export default class JayForm {
  // static property(name, subproperties) {
  //   return this.properties.push(name);
  // }

  // static validation(definitionFunction) {
  //   definitionFunction.call(@)
  // }

  // static required() {}

  constructor(initialData = {}) {
    this.attributes = { errors: {} }

    for (let property of this.constructor.properties) {
      this.attributes[property] = null
    }

    // let iterable = initialData.keys();
    for (let field of Object.keys(initialData)) {
      if (!this.constructor.properties.includes(field)) { continue }
      this.attributes[field] = initialData[field]
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
