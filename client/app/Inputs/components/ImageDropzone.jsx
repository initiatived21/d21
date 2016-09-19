import React, { PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import {
  IMAGE_STATE_NONE, IMAGE_STATE_LOADING, IMAGE_STATE_LOADED,
  IMAGE_STATE_CROPPED
} from '../reducers/imageInputReducer'

export default class ImageDropzone extends ChildComponent {
  static propTypes = {
    onDropFile: PropTypes.func.isRequired
  }

  render() {
    const { onDropFile } = this.props

    return (
      <Dropzone className="c-dropzone"
        activeClassName="c-dropzone--active"
        onDrop={onDropFile} multiple={false}>
        <div className="c-dropzone__inner">
          <FontAwesome className="c-dropzone__icon c-dropzone__image-icon" name="file-image-o" />
          <FontAwesome className="c-dropzone__icon c-dropzone__pointer-icon" name="mouse-pointer" />
          <FontAwesome className="c-dropzone__icon c-dropzone__plus-icon" name="plus" />
        </div>
      </Dropzone>
    )
  }
}
