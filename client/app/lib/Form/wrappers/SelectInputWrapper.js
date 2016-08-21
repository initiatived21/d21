import React, { Component, PropTypes } from 'react'
import SelectInput from '../containers/SelectInput'

export default class SelectInputWrapper extends Component {
  static contextTypes = {
    formObject: PropTypes.object,
    model: PropTypes.string,
    formId: PropTypes.string,
  }

  render() {
    return <SelectInput {...this.props} {...this.context} />
  }
}
