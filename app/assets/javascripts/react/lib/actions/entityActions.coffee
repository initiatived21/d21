module.exports =
  addEntities: (entities) ->
    {
      type: 'ADD_ENTITIES'
      entities
    }

  setEntity: (entityType, entityId, entity) ->
    {
      type: 'SET_ENTITY'
      entityType
      entityId
      entity
    }
