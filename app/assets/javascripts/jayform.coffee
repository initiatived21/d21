class @JayForm
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

    for field, value of initialData
      continue unless @constructor.properties.includes field
      @attributes[field] = value

  validate: (attribute) ->
    # TODO: implement!
    unless @attributes[attribute]
      return "#{attribute}": ['must be filled']
    {}
