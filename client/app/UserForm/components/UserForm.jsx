import React, { PropTypes  } from 'react'
import { InputSet, Label } from 'rform'

import ImageInput from '../../Inputs/wrappers/ImageInputWrapper'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class UserForm extends ChildComponent {
  static propTypes = {
    asSubmodel: PropTypes.string,
    labelContent: PropTypes.string.isRequired,
  }

  render() {
    const { asSubmodel, labelContent } = this.props

    return(
      <div className="o-layout">
        <div className="o-layout__item u-1/4@m u-mb-small">
          <Label submodel={asSubmodel} attribute="name" />
        </div>
        <InputSet ariaLabelOnly
          wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
          submodel={asSubmodel} attribute="name"
        />

        <div className="o-layout__item u-1/4@m u-mb-small">
          <Label submodel={asSubmodel} attribute="organization" />
        </div>
        <InputSet ariaLabelOnly
          wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
          submodel={asSubmodel} attribute="organization"
        />

        <div className="o-layout__item u-1/4@m u-mb-small">
          <Label submodel={asSubmodel} attribute="avatar" />
        </div>
        <ImageInput
          className="c-image-input--avatar o-layout__item u-3/4@m u-mb-small"
          submodel={asSubmodel}
          attribute="avatar"
          aspectRatio={1}
          scaleToX={200}
          scaleToY={200}
        />

        <div className="o-layout__item u-1/4@m u-mb-small">
          <Label submodel={asSubmodel} attribute="email" />
        </div>
        <InputSet ariaLabelOnly
          wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
          submodel={asSubmodel} attribute="email" type="email"
        />

        <div className="o-layout__item u-1/4@m u-mb-small">
          <Label
            submodel={asSubmodel} attribute="password"
            content={labelContent}
          />
        </div>
        <InputSet ariaLabelOnly
          wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
          submodel={asSubmodel} attribute="password" type="password"
        />

        <div className="o-layout__item u-1/4@m">
          <Label submodel={asSubmodel} attribute="password_confirmation" />
        </div>
        <InputSet ariaLabelOnly
          wrapperClassName="c-input o-layout__item u-3/4@m"
          submodel={asSubmodel} attribute="password_confirmation"
          type="password"
        />
      </div>
    )
  }
}
