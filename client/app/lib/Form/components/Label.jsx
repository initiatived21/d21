import React, { PropTypes, Component } from 'react'
import I18n from 'i18n-js'

export default class Label extends Component {
  static propTypes = {
    model: PropTypes.string,
    attribute: PropTypes.string.isRequired,
    submodel: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { model, submodel, attribute, className } = this.props

    const modelParamId = submodel ? `${model}_${submodel}` : model
    const submodelKey = submodel ? `.${submodel}` : ''
    const id = `${modelParamId}_${attribute}`
    const labelText = I18n.t(`react_form.${model}${submodelKey}.${attribute}.label`)

    return (
      <label className={className} htmlFor={id}>
        {labelText}
      </label>
    )
  }
}

Label.isInput = true
