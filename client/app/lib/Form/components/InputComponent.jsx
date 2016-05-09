import React, { PropTypes, Component } from 'react';

export default class Input extends Component {
  static propTypes = {
    model: PropTypes.string, // required, but injection later is ok
    attribute: PropTypes.string.isRequired,
    type: PropTypes.string,
    submodel: PropTypes.string,
    errors: PropTypes.array,
    as: PropTypes.string
  };

  render() {
    const { model, attribute, type, submodel, errors, as, object } = this.props;
    const modelParam = this._modelParam(model, submodel);
    const submodelKey = submodel ? `.${submodel}` : '';

    let field
    if (type === 'textarea') {
      field =
        <textarea
          name={`${modelParam}[${attribute}]`}
          placeholder={I18n.t(
            `react_form.${model}${submodelKey}.${attribute}.placeholder`
          )}
        />
    } else {
      field =
        <input
          type={type || 'text'}
          name={`${modelParam}[${attribute}]`}
          placeholder={I18n.t(
            `react_form.${model}${submodelKey}.${attribute}.placeholder`
          )}
          onChange={
            e => {
              return this.props.onChange(attribute, $(e.target).val());
            }
          }
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
