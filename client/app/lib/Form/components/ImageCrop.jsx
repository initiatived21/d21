import React, { PropTypes, Component } from 'react'
import ReactCrop from 'react-image-crop'

export default class ImageCrop extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    crop: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired
  }

  render() {
    const { width, src, crop, onComplete, onButtonClick } = this.props

    return (
      <div className="c-image-input__crop" style={{ width: `${width}px` }}>
        <ReactCrop
          src={src}
          crop={crop}
          minWidth={30}
          minHeight={30}
          keepSelection
          onComplete={onComplete}
        />
        <button className="o-btn o-btn--small" type="button" onClick={onButtonClick}>
          Fertig
        </button>
      </div>
    )
  }
}
