import React, { PropTypes, Component } from 'react'
import Select from 'react-select'

export default class SelectInputComponent extends Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.number),
    ]).isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const {
      value, name, options, onChange, placeholder
    } = this.props

    return (
      <Select multi joinValues
        name={name}
        value={value}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
      />
    )
  }
}
