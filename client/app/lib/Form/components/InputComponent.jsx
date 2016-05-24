import React, { PropTypes, Component } from 'react'
import Select from 'react-select'
import I18n from 'i18n-js'

export default class Input extends Component {
  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.number),
    ]).isRequired,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    as: PropTypes.string
  };

  render() {
    const {
      model, attribute, type, submodel, errors, as, object, value,
      formObjectName
    } = this.props;
    const modelParam = this._modelParam(model, submodel);
    const submodelKey = submodel ? `.${submodel}` : '';

    const name = `${modelParam}[${attribute}]`
    const placeholder = I18n.t(
      `react_form.${model}${submodelKey}.${attribute}.placeholder`
    )
    const onChange = e => {
      this.props.onChange(
        formObjectName, attribute, $(e.target).val()
      );
    }
            // changes => {
            //   const changesToSave =
            //     changes ? changes.map(change => change.value) : null
            //   this.props.onChange(formObjectName, attribute, changesToSave)
            // }}

    let field
    switch (type) {
      case 'textarea':
        field =
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        break

      case 'multiselect':
        field =
          <Select multi
            name={name + '[]'}
            value={value}
            placeholder={placeholder}
            options={this.props.options}
            onChange={changes => {
              const changesToSave =
                changes ? changes.map(change => change.value) : null
              this.props.onChange(formObjectName, attribute, changesToSave)
            }}
          />
        break

      default:
        field =
          <input
            type={type || 'text'}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
    }

    let errorSpan;
    if (errors) {
      errorSpan =
        <span className='inline-errors'>
          {errors.join(', ')}
        </span>
    }


    return(
      <div className={`input-${attribute}`}>
        <label htmlFor={`${modelParam}[${attribute}]`}>
          {I18n.t(`react_form.${model}${submodelKey}.${attribute}.label`)}
        </label>

        {field}

        {errorSpan}
      </div>
    )
  }

  _modelParam(model, submodel) {
    if (submodel) {
      return `${model}[${submodel}]`;
    } else {
      return model;
    }
  }
};
