module.exports = (state, action) ->
  switch action.type
    when 'SUBMIT_PLEDGE_FORM'
      console.log('handling submitted pledge form', state)
      retst = Object.assign {}, state, foo: action.formData.content
      console.log retst
      return retst
    else
      state
