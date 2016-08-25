import React, { Component, PropTypes } from 'react'
import ImageInput from '../containers/ImageInput'

export default class ImageInputWrapper extends Component {
  static contextTypes = {
    formObject: PropTypes.object,
    model: PropTypes.string,
  }

  render() {
    return <ImageInput {...this.props} {...this.context} />
  }
}
