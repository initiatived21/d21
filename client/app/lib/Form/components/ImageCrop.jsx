import React, { PropTypes, Component } from 'react'
import ReactCrop from 'react-image-crop'

export default class ImageCrop extends Component {
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
        <button
          className="o-btn o-btn--small c-btn c-btn--primary"
          type="button"
          onClick={handleFinishCrop}
        >
          Fertig
        </button>
      </div>
    )
  }
}
