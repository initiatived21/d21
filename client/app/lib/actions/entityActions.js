const addEntities = function(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities
  }
}

const setEntity = function(entityType, entityId, entity) {
  return {
    type: 'SET_ENTITY',
    entityType,
    entityId,
    entity
  }
}

export { addEntities, setEntity }
