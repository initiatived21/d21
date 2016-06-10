const submitSignPledgeFormRequest = function() {
  return {
    type: 'SUBMIT_SIGN_PLEDGE_FORM_REQUEST'
  }
}
const submitSignPledgeFormFailure = function(error) {
  return {
    type: 'SUBMIT_SIGN_PLEDGE_FORM_FAILURE',
    error
  }
}
const submitSignPledgeFormSuccess = function(response) {
  return {
    type: 'SUBMIT_SIGN_PLEDGE_FORM_SUCCESS',
    response
  }
}
export default function submitSignPledgeForm(url, data) {
  return function(dispatch) {
    dispatch(submitSignPledgeFormRequest())

    const fetch = require('isomorphic-fetch') // regular import breaks in SSR
    return fetch(url + '.json', { method: 'POST', body: data })
      .then(
        function(response) {
          const { status, statusText } = response
          if (status >= 400) {
            dispatch(submitSignPledgeFormFailure(response))
            throw new Error(`Submit Signature Error ${status}: ${statusText}`)
          }
          return response.json()
        }
      ).then(json => {
        console.log('json', json)
        dispatch(submitSignPledgeFormSuccess(json))
      })
  }
}

