import React, { PropTypes  } from 'react'
import { Form, InputSet, Input, Label, Button } from 'rform'
import FontAwesome from 'react-fontawesome'
import MediaQuery from 'react-responsive'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import BasePledgeFormObject from '../../lib/form_objects/base_pledge_form'
import PledgeWithInitiatorFormObject from '../../lib/form_objects/pledge_with_initiator_form'
import PledgeContentInputs from './PledgeContentInputs'
import ImageInput from '../../Inputs/wrappers/ImageInputWrapper'
import SelectInput from '../../Inputs/wrappers/SelectInputWrapper'
import DateInput from '../../Inputs/wrappers/DateInputWrapper'
import Tooltip from '../../Tooltip/components/Tooltip'
import PledgeFormHelp from './PledgeFormHelp'

export default class PledgeForm extends ChildComponent {
  static propTypes = {
    form: PropTypes.object.isRequired,
    availableTags: PropTypes.array.isRequired,
    onLinkClick: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
  }

  render() {
    const { onLinkClick, currentUser, form } = this.props

    const formObjectClass =
      currentUser ? BasePledgeFormObject : PledgeWithInitiatorFormObject

    const initiatorForm = currentUser ? null : this.renderInitiatorForm()
    const loginPrompt = currentUser ? null : this.renderLoginPrompt(onLinkClick)

    return(
      <Form
        multipart ajax
        className="c-new-pledge"
        formObjectClass={formObjectClass}
        {...form}
      >
        <h1>{this.t('.heading')}</h1>

        {loginPrompt}

        <div className='c-new-pledge__pledge-data'>

          <PledgeContentInputs />

          <div className="o-sidebar o-sidebar--right u-1/3@l u-pl-small@l">
            <MediaQuery maxWidth={991}>
              <PledgeFormHelp controls />
            </MediaQuery>
            <MediaQuery minWidth={992}>
              <PledgeFormHelp />
            </MediaQuery>
          </div>

          <div className="o-layout o-layout--small u-mb-small">
            <div className="o-layout__item u-1/4@m">
              <Label attribute="location" />
            </div>
            <InputSet ariaLabelOnly
              wrapperClassName="c-input o-layout__item u-2/5@m"
              attribute="location"
            />
            <div className="o-layout__item u-1/5@m">
              <Tooltip>
                {this.t('.tooltip.location')}
              </Tooltip>
            </div>
          </div>

          <div className="o-layout o-layout--small u-mb-small">
            <div className="o-layout__item u-1/4@m">
              <Label attribute="deadline" />
            </div>
            <div className="c-input o-layout__item u-2/5@m">
              <DateInput
                attribute="deadline"
                placeholder={this.t('rform.pledge.deadline.placeholder')}
              />
            </div>
            <div className="o-layout__item u-1/5@m">
              <Tooltip>
                {this.t('.tooltip.deadline')}
              </Tooltip>
            </div>
          </div>

          <div className="o-layout o-layout--small">

            <div className="o-layout__item u-1/4@m u-mb-small">
              <Label attribute="title" />
            </div>
            <InputSet ariaLabelOnly
              wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
              attribute="title"
            />
            <div className="o-layout__item u-1/4@m u-mb-small">
              <Label attribute="description" />
            </div>
            <InputSet ariaLabelOnly
              wrapperClassName="c-textarea o-layout__item u-3/4@m u-mb-small"
              attribute="description" type="textarea"
            />

            <div className="o-layout__item u-1/4 u-mb-small">
              <Label attribute="image" />
            </div>

            <div className="o-layout__item u-3/4 u-mb-small">
              <div className="o-marginal">
                <ImageInput
                  className="c-image-input--pledge-image o-marginal__content"
                  attribute="image"
                  previewArea={300000}
                  aspectRatio={3/2}
                  scaleToX={1200}
                  scaleToY={800}
                />
                <Tooltip className="o-marginal__note">
                  {this.t('.tooltip.image')}
                </Tooltip>
              </div>
            </div>

            <div className="o-layout__item u-1/4@m">
              <Label attribute="tag_ids" />
            </div>

            <div className="c-input o-layout__item u-3/4@m">
              <SelectInput
                attribute='tag_ids'
                options={this.props.availableTags}
                placeholder={this.t('rform.pledge.tag_ids.placeholder')}
              />
            </div>
          </div>
        </div>

        {initiatorForm}

        <div className="o-layout u-mt-large">
          <div className="o-layout__item u-1/3@m">
            <Button
              className="c-new-pledge__save-draft o-btn o-btn--small c-btn c-btn--primary u-mb-small"
              commit='save_draft'
            >
              <FontAwesome name="check" />
              {' '}
              {this.t('.save_draft')}
            </Button>
            <p>
              {this.t('.draft_explanation')}
            </p>
          </div>
          <div className="o-layout__item u-2/3@m">
            <Button
              className="c-new-pledge__preview o-btn o-btn--small c-btn c-btn--secondary u-mb-small"
            >
              <FontAwesome name="eye" />
              {' '}
              {this.t('.preview')}
            </Button>
            <p>
              {this.t('.preview_explanation')}
            </p>
          </div>
        </div>
      </Form>
    )
  }

  renderInitiatorForm() {
    const { onLinkClick, currentUser } = this.props

    const loginPrompt = currentUser ? null : this.renderLoginPrompt(onLinkClick)

    return (
      <div className='c-new-pledge__user-data'>
        <h2>{this.t('.account.heading')}</h2>

        <p className="u-mb-small">
          {this.t('.account.explanation')}
        </p>

        {loginPrompt}

        <div className="o-layout">
          <div className="o-layout__item u-1/4@m u-mb-small">
            <Label submodel="initiator" attribute="avatar" />
          </div>
          <ImageInput
            className="c-image-input--avatar o-layout__item u-3/4@m u-mb-small"
            submodel="initiator"
            attribute="avatar"
            aspectRatio={1}
            scaleToX={200}
            scaleToY={200}
          />

          <div className="o-layout__item u-1/4@m u-mb-small">
            <Label submodel="initiator" attribute="name" />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
            submodel='initiator' attribute='name'
          />
          <div className="o-layout__item u-1/4@m u-mb-small">
            <Label submodel="initiator" attribute="email" />
          </div>

          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m u-mb-small"
            submodel='initiator' attribute='email' type='email'
          />

          <div className="o-layout__item u-1/4@m">
            <Label submodel="initiator" attribute="password" />
          </div>
          <InputSet ariaLabelOnly
            wrapperClassName="c-input o-layout__item u-3/4@m" submodel='initiator'
            attribute='password' type='password'
          />
        </div>
      </div>
    )
  }
  renderLoginPrompt(onLinkClick) {
    return (
      <p className="u-mb">
        {this.t('.account.have_one')}
        {' '}
        <a href="#" onClick={onLinkClick}>
          {this.t('.account.login')}
        </a>
      </p>
    )
  }
}
