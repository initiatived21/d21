import React, { Component, PropTypes } from 'react'
import NumberInput from '../containers/NumberInput'

export default class NumberInputWrapper extends Component {
  static contextTypes = {
    formObject: PropTypes.object,
    model: PropTypes.string,
    formId: PropTypes.string,
  }

  render() {
    return <NumberInput {...this.props} {...this.context} />
  }
}
