import * as actions from './imageInputActions'
import * as types from '../../lib/constants/actionTypes'

describe ('actions', function() {
  it('should create an action to change an image crop', function() {
    const
      id = 'image_id',
      // Simplified crop object
      crop = {
        width: 300,
        height: 200
      }
    const expectedAction = {
      type: types.CHANGE_CROP,
      id,
      crop
    }

    actions.changeCrop(id, crop).should.eql(expectedAction)
  })

  it ('should create an action to crop an image', function() {
    const
      id = 'image_id',
      croppedImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAY',
      scaleToX = 1000,
      scaleToY = 1000
    const expectedAction = {
      type: types.CROP_IMAGE,
      id,
      croppedImageUrl,
      scaleToX,
      scaleToY
    }

    actions.cropImage(id, croppedImageUrl, scaleToX, scaleToY).should.eql(expectedAction)
  })

  it ('should create an action to clear an image', function() {
    const id = 'image_id'
    const expectedAction = {
      type: types.CLEAR_IMAGE,
      id
    }

    actions.clearImage(id).should.eql(expectedAction)
  })
})
