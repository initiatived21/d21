import React, { PropTypes, Component } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import I18n from 'i18n-js'

export default class Input extends Component {
  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    formId: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.number),
    ]).isRequired,
    noLabel: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    className: PropTypes.string,
  }

  render() {
    const {
      model, attribute, type, submodel, errors, object, value,
      noLabel, inlineLabel, className, formId
    } = this.props

    const modelParamName = this._modelParamName(model, submodel)
    const modelParamId = this._modelParamId(model, submodel)

    const submodelKey = submodel ? `.${submodel}` : ''

    const id = `${modelParamId}_${attribute}`
    const name = `${modelParamName}[${attribute}]`
    const label = I18n.t(
      `react_form.${model}${submodelKey}.${attribute}.label`
    )
    const placeholder = I18n.t(
      `react_form.${model}${submodelKey}.${attribute}.placeholder`
    )

    const dateFormat = I18n.t('react_form.date_format')

    let ariaLabel, placeholderOrLabel = placeholder
    if (inlineLabel) {
      ariaLabel = label
      placeholderOrLabel = label
    }

    // TODO: Remove jQuery dependency
    const onChange = e => {
      this.props.onChange(
        formId, attribute, submodel, $(e.target).val()
      )
    }
            // changes => {
            //   const changesToSave =
            //     changes ? changes.map(change => change.value) : null
            //   this.props.onChange(formId, attribute, changesToSave)
            // }}

    let labelElement
    if (!inlineLabel && !noLabel) {
      labelElement = (
        <label htmlFor={id}>
          {I18n.t(`react_form.${model}${submodelKey}.${attribute}.label`)}
        </label>
      )
    }

    let field
    switch (type) {
    case 'textarea':
      field =
          <textarea
            id={id}
            name={name}
            value={value}
            placeholder={placeholderOrLabel}
            aria-label={ariaLabel}
            onChange={onChange}
          />
      break

    case 'multiselect':
      field =
          <Select multi
            name={name}
            value={value}
            joinValues
            placeholder={placeholder}
            options={this.props.options}
            onChange={changes => {
              const changesToSave =
                changes ? changes.map(change => change.value) : null
              this.props.onChange(
                formId, attribute, submodel, changesToSave
              )
            }}
          />
      break

    case 'file': // no value
      field =
          <input
            id={id}
            type='file'
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
      break

    case 'date':
      field =
          <DatePicker
            selected={value ? moment(value) : undefined}
            placeholderText={placeholder}
            dateFormat={dateFormat}
            minDate={moment()}
            maxDate={moment().add(5, 'months')}
            locale={I18n.locale}
            onChange={(date) => {
              this.props.onChange(
                formId, attribute, submodel, date.toString()
              )
            }}
          />
      break

    default:
      field =
          <input
            id={id}
            type={type || 'text'}
            name={name}
            value={value}
            placeholder={placeholderOrLabel}
            aria-label={ariaLabel}
            onChange={onChange}
          />
    }

    let errorSpan
    if (errors && errors.length > 0) {
      errorSpan =
        <span className='inline-errors'>
          {errors.join(', ')}
        </span>
    }

    let combinedClassName = `input-${attribute}`
    if (errors && errors.length > 0) {
      combinedClassName += ' has-errors'
    }
    if (className) {
      combinedClassName += ` ${className}`
    }

    if (type === 'checkbox') {
      return (
        <div className={combinedClassName}>
          {field}

          {labelElement}

          {errorSpan}
        </div>
      )
    }
    else {
      return (
        <div className={combinedClassName}>
          {labelElement}

          {field}

          {errorSpan}
        </div>
      )
    }
  }

  _modelParamName(model, submodel) {
    if (submodel) {
      return `${model}[${submodel}]`
    } else {
      return model
    }
  }

  _modelParamId(model, submodel) {
    if (submodel) {
      return `${model}_${submodel}`
    } else {
      return model
    }
  }
}
