import { combineReducers } from 'redux'
import { reducer as forms, initialState as initialFormState } from 'rform'
import entities from './entities'
import flashMessages from './flashMessages'
import searchLoadingState from './searchLoadingState'
import searchResults from './searchResults'
import sessionPopup from './sessionPopup'
import signedPledges from './signedPledges'
import imageInputs from './imageInputs'
import currentUser from './currentUser'
import authToken from './authToken'

export default combineReducers({
  entities,
  flashMessages,
  searchLoadingState,
  searchResults,
  sessionPopup,
  signedPledges,
  imageInputs,
  currentUser,
  authToken,
  forms,
})
