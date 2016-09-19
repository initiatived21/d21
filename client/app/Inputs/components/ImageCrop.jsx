import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ReactCrop from 'react-image-crop'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class ImageCrop extends ChildComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    crop: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
    handleFinishCrop: PropTypes.func.isRequired
  }

  render() {
    const { width, src, crop, onComplete, handleFinishCrop } = this.props

    return (
      <div className="c-image-input__crop-tool" >
        <div
          className="c-image-input__crop-area"
          style={{ width: `${width}px` }}
          onDoubleClick={handleFinishCrop}
        >
          <ReactCrop
            src={src}
            crop={crop}
            minWidth={30}
            minHeight={30}
            keepSelection
            onComplete={onComplete}
          />
        </div>
        <p className="u-mb-small">{this.t('.crop_explanation')}</p>
        <button
          className="o-btn o-btn--small c-btn c-btn--primary"
          type="button"
          onClick={handleFinishCrop}
        >
          <FontAwesome name="crop" />
          {' '}
          {this.t('.select_detail')}
        </button>
      </div>
    )
  }
}
