import React, { Component, PropTypes } from 'react'
import DateInput from '../containers/DateInput'

export default class DateInputWrapper extends Component {
  static contextTypes = {
    model: PropTypes.string,
    formId: PropTypes.string,
  }

  render() {
    return <DateInput {...this.props} {...this.context} />
  }
}
