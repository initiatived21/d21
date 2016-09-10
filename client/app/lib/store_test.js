import store from './store.js'
import { IMAGE_STATE_NONE } from './reducers/imageInputs'

describe('store', function() {
  const initialState = {
    entities: {
      pledges: {},
      tags: {},
      users: {},
    },
    authToken: null,
    currentUser: null,
    searchResults: [],
    signedPledges: [],
    flashMessages: {},
    searchLoadingState: false,
    sessionPopup: false,
    forms: {
      isSubmitting: {}
    },
    imageInputs: {
      avatar: {
        crop: {},
        croppedImageUrl: '',
        filename: null,
        imageState: IMAGE_STATE_NONE,
        originalImage: null,
        originalImageHeight: 0,
        originalImageWidth: 0
      },
      image: {
        crop: {},
        croppedImageUrl: '',
        filename: null,
        imageState: IMAGE_STATE_NONE,
        originalImage: null,
        originalImageHeight: 0,
        originalImageWidth: 0
      }
    }
  }

  it('should have an empty initial state', function() {
    store.getState().should.eql(initialState)
  })
})
