import React, { PropTypes  } from 'react'
import { InputSet, Label, Errors } from 'rform'

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
      <div>
        <div className="o-layout u-mb">
          <div className="o-layout__item u-1/4@m u-mb-tiny">
            <Label submodel={asSubmodel} attribute="name" />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m"
            submodel={asSubmodel} attribute="name"
          />
        </div>

        <div className="o-layout u-mb">
          <div className="o-layout__item u-1/4@m u-mb-tiny">
            <Label submodel={asSubmodel} attribute="organization" />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m"
            submodel={asSubmodel} attribute="organization"
          />
        </div>

        <div className="o-layout u-mb">
          <div className="o-layout__item u-1/4@m u-mb-tiny">
            <Label submodel={asSubmodel} attribute="avatar" />
          </div>
          <ImageInput
            type="avatar"
            className="o-layout__item u-3/4@m"
            submodel={asSubmodel}
            attribute="avatar"
            aspectRatio={1}
            scaleToX={200}
            scaleToY={200}
          />
          <Errors attribute='avatar' submodel={asSubmodel} />
        </div>

        <div className="o-layout u-mb">
          <div className="o-layout__item u-1/4@m u-mb-tiny">
            <Label submodel={asSubmodel} attribute="email" />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m"
            submodel={asSubmodel} attribute="email" type="email"
          />
        </div>

        <div className="o-layout u-mb">
          <div className="o-layout__item u-1/4@m u-mb-tiny">
            <Label
              submodel={asSubmodel} attribute="password"
              content={labelContent}
            />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m"
            submodel={asSubmodel} attribute="password" type="password"
          />
        </div>

        <div className="o-layout">
          <div className="o-layout__item u-1/4@m u-mb-tiny">
            <Label submodel={asSubmodel} attribute="password_confirmation" />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m"
            submodel={asSubmodel} attribute="password_confirmation"
            type="password"
          />
        </div>
      </div>
    )
  }
}
