import { normalize, Schema, arrayOf } from 'normalizr'

const Schemas = new function() {
  this.pledge =
    new Schema('pledges', {
      idAttribute: 'id'
    })

  this.pledges =
    arrayOf(this.pledge)

  this.signature =
    new Schema('signatures', {
      idAttribute: 'id'
    })

  this.signatures =
    arrayOf(this.signature)

  this.comment =
    new Schema('comments', {
      idAttribute: 'id'
    })

  this.comments =
    arrayOf(this.comment)

  this.update =
    new Schema('updates', {
      idAttribute: 'id'
    })

  this.updates =
    arrayOf(this.update)

  this.user =
    new Schema('users', {
      idAttribute: 'id'
    })

  this.users =
    arrayOf(this.user)

  this.currentUser = this.user
}

export default function normalized(schemaName, data) {
  if (!Schemas[schemaName]) {
    console.error(`No normalization schema for ${schemaName}`)
  }
  return normalize(data, Schemas[schemaName])
}

module.exports = normalized
