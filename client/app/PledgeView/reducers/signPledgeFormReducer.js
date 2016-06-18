import assign from 'lodash/assign'

export const initialState = {
  isSubmittingSignatureForm: false,
}

export default function signPledgeFormReducer(state = initialState, action) {
  const { type, error, response } = action

  switch (type) {
    case 'SUBMIT_SIGN_PLEDGE_FORM_REQUEST':
      return assign({}, state, {
        isSubmittingSignatureForm: true
      })

    case 'SUBMIT_SIGN_PLEDGE_FORM_FAILURE':
      return assign({}, state, {
        isSubmittingSignatureForm: false
      })

    case 'SUBMIT_SIGN_PLEDGE_FORM_SUCCESS':
      console.log('RESPONSE:', response)
      let responseChanges = {}
      switch (response.status) {
      case 'success':
        responseChanges.NewSignatureFormObject = {}
        responseChanges.signatures = state.signatures || {}
        responseChanges.signatures[response.added.id] = response.added
      break
      case 'formErrors':
        responseChanges.NewSignatureFormObject = state.NewSignatureFormObject
        responseChanges.NewSignatureFormObject.errors = response.errors
      break
      default:
        throw `Unknown response status "${response.status}"`
      }
      return assign({}, state, {
        isSubmittingSignatureForm: false,
      }, responseChanges)

    default:
      return state;
  }
}

