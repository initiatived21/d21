import React, { PropTypes, Component } from 'react'
import DatePicker from 'react-datepicker'

export default class SelectInputComponent extends Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    formObject: PropTypes.object.isRequired,
    selected: PropTypes.object,
    minDate: PropTypes.object.isRequired,
    maxDate: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    dateFormat: PropTypes.string.isRequired,
  }

  render() {
    const {
      selected, name, onChange, placeholder, minDate, maxDate, locale,
      dateFormat, onBlur,
    } = this.props

    return (
      <DatePicker
        name={name}
        selected={selected}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
        locale={locale}
        onChange={onChange}
        onBlur={onBlur}
      />
    )
  }
}
