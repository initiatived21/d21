normalize = require('../../normalization')

class PledgeActions
  @addEntities: (entities) ->
    {
      type: 'ADD_ENTITIES'
      entities
    }

module.exports = PledgeActions
