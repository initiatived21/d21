module.exports = class JayForm
  @properties: []

  @property: (name, subproperties) ->
    @properties.push name

  @validation: (definitionFunction) ->
    # definitionFunction.call(@)

  @required: ->

  constructor: (initialData) ->
    @attributes = { errors: {} }

    for property in @constructor.properties
      @attributes[property] = null

    for field in initialData.keys()
      continue unless @constructor.properties.includes field
      @attributes[field] = initialData[field]

  validate: (attribute) ->
    # TODO: implement!
    unless @attributes[attribute]
      return {}
      # return "#{attribute}": ['must be filled']
    {}
