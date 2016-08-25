import store from './store.js'
import { IMAGE_STATE_NONE } from '../Inputs/reducers/imageInputReducer'

describe('store', function() {
  const initialState = {
    pledges: {},
    tags: {},
    ui: {
      searchResultsLoading: false,
      sessionPopupVisible: false
    },
    isSubmitting: {},
    imageInputs: {
      avatar: {
        crop: {},
        croppedImageUrl: '',
        imageState: IMAGE_STATE_NONE,
        originalImage: null,
        originalImageHeight: 0,
        originalImageWidth: 0
      },
      image: {
        crop: {},
        croppedImageUrl: '',
        imageState: IMAGE_STATE_NONE,
        originalImage: null,
        originalImageHeight: 0,
        originalImageWidth: 0
      }
    }
  }

  it('should have an empty initial state', function() {
    store.getState().should.deep.equal(initialState)
  })
})



