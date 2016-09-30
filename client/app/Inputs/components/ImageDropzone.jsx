import React, { PropTypes } from 'react'
import { Input } from 'rform'
import Dropzone from 'react-dropzone'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class ImageDropzone extends ChildComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onDropFile: PropTypes.func.isRequired,
    onRemoveFileClick: PropTypes.func.isRequired,
    filename: PropTypes.string,
    isServerImage: PropTypes.bool,
  }

  render() {
    const { type, onDropFile, onRemoveFileClick, filename, isServerImage } = this.props

    let modalElement
    if (filename || isServerImage) {
      modalElement = (
        <div className="c-dropzone c-dropzone--loaded">
          <div className="c-dropzone__inner">
            <p className="c-dropzone__filename">
              {filename || this.t('.previously_uploaded')}
            </p>
            <a href="#" onClick={onRemoveFileClick} className="c-dropzone__remove-button"
              title={this.t('.dismiss_image')}>
              <FontAwesome className="c-dropzone__remove-icon" name="times-circle" />
            </a>
          </div>
        </div>
      )
    } else {
      modalElement = (
        <Dropzone className="c-dropzone" activeClassName="c-dropzone--active"
          onDrop={onDropFile} multiple={false} accept="image/*" disablePreview>
          <div className="c-dropzone__inner">
            <FontAwesome className="c-dropzone__image-icon" name="file-image-o" />
            <FontAwesome className="c-dropzone__pointer-icon" name="mouse-pointer" />
            <FontAwesome className="c-dropzone__plus-icon" name="plus" />
          </div>
        </Dropzone>
      )
    }

    return (
      <div>
        {modalElement}
        <Input type="hidden" attribute={`remove_${type}`} />
      </div>
    )
  }
}
