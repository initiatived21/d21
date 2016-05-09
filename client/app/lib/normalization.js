import { normalize, Schema, arrayOf } from 'normalizr';

const Schemas = new function() {
  this.pledge =
    new Schema('pledges', {
      idAttribute: 'id'
    });

  this.pledges =
    arrayOf(this.pledge)
}

export default function normalized(schemaName, data) {
  return normalize(data, Schemas[schemaName])
}

module.exports = normalized
