import React, { PropTypes  } from 'react'
import { Form, InputSet, Input, Label, Button } from 'rform'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import NumberInput from '../../lib/Form/wrappers/NumberInputWrapper'

export default class PledgeForm extends ChildComponent {
  static propTypes = {
  }

  render() {
    return (
      <div className='c-pledge-form'>

        <div className="c-pledge-form__group1">

          <div className="c-pledge-form__group1-1">
            <span className="c-pledge-form__part1 c-pledge-form__text">
              {this.t('.promise.part1')}
            </span>
          </div>

          <div className="c-pledge-form__group1-2">
            <InputSet
              wrapperClassName="c-input c-pledge-form__part2 c-pledge-form__input"
              attribute='content'
            />
            <span className="c-pledge-form__part3 c-pledge-form__text">
              {this.t('.promise.part3')}
            </span>
          </div>

        </div>

        <div className="c-pledge-form__group2">

          <div className="c-pledge-form__group2-1">
            <span className="c-pledge-form__part4 c-pledge-form__text">
              {this.t('.promise.part4')}
            </span>
            <NumberInput
              className="c-pledge-form__part5 c-pledge-form__input c-number-input"
              attribute="amount" defaultValue={10} min={1} max={10000}
            />
          </div>

          <div className="c-pledge-form__group2-2">
            <InputSet
              wrapperClassName="c-input c-pledge-form__part6 c-pledge-form__input"
              attribute='who'
            />
          </div>

        </div>

        <div className="c-pledge-form__group3">
          <InputSet
            wrapperClassName="c-input c-pledge-form__part7 c-pledge-form__input"
            attribute='requirement'
          />
          <span className="c-pledge-form__part8 c-pledge-form__text">
            {this.t('.promise.part8')}
          </span>
        </div>
      </div>
    )
  }
}
