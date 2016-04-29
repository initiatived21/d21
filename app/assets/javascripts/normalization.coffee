normalizr = require('normalizr')

class Schemas
  @pledge:
    new normalizr.Schema 'pledges',
      idAttribute: 'id'
  @pledges: normalizr.arrayOf @pledge


normalize = (schemaName, data) ->
  normalizr.normalize data, Schemas[schemaName]

module.exports = normalize
