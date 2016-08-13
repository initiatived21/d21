import assign from 'lodash/assign'
import forIn from 'lodash/forIn'

import redirectTo from '../../browser/redirectTo'

export const initialAjaxSubmissionState = {
  isSubmitting: {}
}

export default function ajaxSubmissionReducer(state = initialAjaxSubmissionState, action) {
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
      if (typeof response.redirect_to === 'undefined') {
        responseChanges[action.formObjectName] = {}
        forIn(response.changes, (changedInstance, changedList) => {
          responseChanges[changedList] = state[changedList] || {}
          responseChanges[changedList][changedInstance.id] = changedInstance
        })
      }
      else {
        redirectTo(response.redirect_to)
      }
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
    return newState
  }
}

