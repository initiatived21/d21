import React, { PropTypes, Component } from 'react'
import I18n from 'i18n-js'
import FontAwesome from 'react-fontawesome'

export default class NumberInputComponent extends Component {
  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    value: PropTypes.number,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    noLabel: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    className: PropTypes.string,
    formId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired
  }

  render() {
    const {
      model, attribute, submodel, errors, value, min, max,
      noLabel, inlineLabel, formId, className
    } = this.props

    const modelParamName = this._modelParamName(model, submodel)
    const modelParamId = this._modelParamId(model, submodel)

    const submodelKey = submodel ? `.${submodel}` : ''

    const id = `${modelParamId}_${attribute}`
    const name = `${modelParamName}[${attribute}]`
    const label = I18n.t(
      `rform.${model}${submodelKey}.${attribute}.label`
    )
    const placeholder = I18n.t(
      `rform.${model}${submodelKey}.${attribute}.placeholder`
    )

    let ariaLabel, placeholderOrLabel = placeholder
    if (inlineLabel) {
      ariaLabel = label
      placeholderOrLabel = label
    }

    const onChange = e => {
      this.props.onChange(
        formId, attribute, submodel, $(e.target).val()
      )
    }

    const onDecrease = () => {
      this.props.onDecrease(formId, attribute, submodel, value)
    }

    const onIncrease = () => {
      this.props.onIncrease(formId, attribute, submodel, value)
    }

    const onBlur = e => {
      this.props.onBlur(
        formId, attribute, submodel, $(e.target).val()
      )
    }

    let labelElement
    if (!inlineLabel && !noLabel) {
      labelElement = (
        <label htmlFor={id}>
          {I18n.t(`rform.${model}${submodelKey}.${attribute}.label`)}
        </label>
      )
    }

    const field = (
      <input
        id={id}
        className="c-number-input__input"
        type="number"
        name={name}
        value={value}
        min={min}
        max={max}
        placeholder={placeholderOrLabel}
        aria-label={ariaLabel}
        onChange={onChange}
        onBlur={onBlur}
      />
    )

    let errorSpan
    if (errors) {
      errorSpan =
        <span className='inline-errors'>
          {errors.join(', ')}
        </span>
    }

    let combinedClassName = `input-${attribute} c-number-input`
    if (className) {
      combinedClassName += ` ${className}`
    }

    const minusButton = (
      <button className="c-number-input__decrease" type="button" onClick={onDecrease}>
        <FontAwesome name="minus" />
      </button>
    )

    const plusButton = (
      <button className="c-number-input__increase" type="button" onClick={onIncrease}>
        <FontAwesome name="plus" />
      </button>
    )

    return (
      <div className={combinedClassName}>
        {labelElement}

        <div>
          {minusButton}
          {' '}
          {field}
          {' '}
          {plusButton}
        </div>

        {/*errorSpan*/}
      </div>
    )
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
