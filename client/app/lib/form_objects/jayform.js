export default class JayForm {
  // static property(name, subproperties) {
  //   return this.properties.push(name);
  // }

  static validation(definitionFunction) {
    // definitionFunction.call(@)
  }

  static required() {}

  constructor(initialData = {}) {
    console.log('initD', initialData)
    this.attributes = { errors: {} };

    for (let property of this.constructor.properties) {
      this.attributes[property] = null;
    }

    // let iterable = initialData.keys();
    for (let field of Object.keys(initialData)) {
      if (!this.constructor.properties.includes(field)) { continue; }
      this.attributes[field] = initialData[field];
    }
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
    return {};
  }
};
