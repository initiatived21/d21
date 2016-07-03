import assign from 'lodash/assign'

export const initialAjaxSubmissionState = {
  isSubmitting: {}
}

export default function ajaxSumbissionReducer(state = initialState, action) {
  const { type, error, response } = action
  let newState = assign({}, state)

  switch (type) {
    case 'SUBMIT_AJAX_FORM_REQUEST':
      newState.isSubmitting[action.formObjectName] = true
      return newState

    case 'SUBMIT_AJAX_FORM_FAILURE':
      newState.isSubmitting[action.formObjectName] = false
      return newState

    case 'SUBMIT_AJAX_FORM_SUCCESS':
      console.log('RESPONSE:', response)
      let responseChanges = {}
      switch (response.status) {
      case 'success':
        responseChanges[action.formObjectName] = {}
        responseChanges.signatures = state.signatures || {}
        responseChanges.signatures[response.added.id] = response.added
      break
      case 'formErrors':
        responseChanges[action.formObjectName] = state[action.formObjectName]
        responseChanges[action.formObjectName].errors = response.errors
      break
      default:
        throw `Unknown response status "${response.status}"`
      }

      newState = assign(newState, responseChanges)
      newState.isSubmitting[action.formObjectName] = false
      return newState

    default:
      return newState;
  }
}

