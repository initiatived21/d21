import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import {
  IMAGE_STATE_NONE, IMAGE_STATE_LOADING, IMAGE_STATE_LOADED,
  IMAGE_STATE_CROPPED
} from '../reducers/imageInputReducer'

export default class ImagePreview extends ChildComponent {
  static propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool
  }

  render() {
    const { url, loading } = this.props

    let preview
    if (loading) {
      preview = (
        <p className="c-image-input__text">
          <i>{this.t('.loading_image')}</i>
        </p>
      )
    } else {
      if (url) {
        preview = (
          <div className="c-image-input__preview">
            <img src={url} />
          </div>
        )
      } else {
        preview = (
          <p className="c-image-input__text">
            {this.t('.select_image')}
          </p>
        )
      }
    }

    return preview
  }
}
