module.exports = (id, attribute, value) ->
  {
    type: 'UPDATE_PLEDGE_ATTRIBUTE'
    id
    attribute
    value
  }
