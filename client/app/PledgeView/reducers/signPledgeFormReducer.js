import assign from 'lodash/assign'

export const initialState = {
  isFetching: false,
}

export default function signPledgeFormReducer(state = initialState, action) {
  const { type, error, response } = action

  switch (type) {
    case 'SUBMIT_SIGN_PLEDGE_FORM_REQUEST':
      return assign({}, state, {
        isFetching: true
      })

    case 'SUBMIT_SIGN_PLEDGE_FORM_FAILURE':
      return assign({}, state, {
        isFetching: false
      })

    case 'SUBMIT_SIGN_PLEDGE_FORM_SUCCESS':
      console.log('RESPONSE:', response)
      return assign({}, state, {
        isFetching: false,
        pledgeForm: response
      })

    default:
      return state;
  }
}

