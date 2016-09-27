import React, { Component, PropTypes } from 'react'
import ImageInput from '../containers/ImageInput'

export default class ImageInputWrapper extends Component {
  static contextTypes = {
    model: PropTypes.string,
    formId: PropTypes.string,
    formObjectClass: PropTypes.func,
  }

  render() {
    return <ImageInput {...this.props} {...this.context} />
  }
}
